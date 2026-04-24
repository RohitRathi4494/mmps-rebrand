import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import ImageUpload from '../components/ImageUpload';
import { useToast } from '../context/ToastContext';
import { getFaculty, createFaculty, updateFaculty, deleteFaculty, uploadMedia } from '../services/contentService';
import { Plus, Pencil, Trash2, AlertTriangle, User } from 'lucide-react';

const EMPTY = { name: '', designation: '', department: '', qualification: '', email: '', phone: '', bio: '', order: 1, active: true, photo: null };

const DEPTS = ['Administration', 'Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Computer Science', 'Physical Education', 'Arts', 'Music'];

export default function FacultyManager() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const load = () => getFaculty().then(setData);
  useEffect(() => { load(); }, []);

  const openAdd = () => { setForm({ ...EMPTY, order: data.length + 1 }); setModal('edit'); };
  const openEdit = (row) => { setForm(row); setSelected(row); setModal('edit'); };
  const openDelete = (row) => { setSelected(row); setModal('delete'); };
  const close = () => { setModal(null); setSelected(null); };

  const setField = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSave = async () => {
    if (!form.name.trim()) { toast('Name is required', 'error'); return; }
    setLoading(true);
    try {
      let finalData = { ...form };
      // If the photo is a base64 string, upload it first
      if (form.photo && form.photo.startsWith('data:')) {
        const ext = form.photo.split(';')[0].split('/')[1] || 'jpg';
        const fileName = `faculty_${Date.now()}.${ext}`;
        finalData.photo = await uploadMedia(form.photo, fileName);
      }

      if (!selected) { await createFaculty(finalData); toast('Faculty member added!', 'success'); }
      else { await updateFaculty(selected.id, finalData); toast('Faculty member updated!', 'success'); }
      await load(); close();
    } catch (err) { 
      toast(`Error saving: ${err.message}`, 'error'); 
    }
    finally { setLoading(false); }
  };

  const handleDelete = async () => {
    setLoading(true);
    try { await deleteFaculty(selected.id); toast('Faculty member removed', 'warning'); await load(); close(); }
    catch { toast('Error deleting', 'error'); }
    finally { setLoading(false); }
  };

  const cols = [
    { key: 'photo', label: '', render: r => (
      <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {r.photo ? <img src={r.photo} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <User size={18} color="var(--text-light)" />}
      </div>
    )},
    { key: 'name',        label: 'Name',        sortable: true, render: r => <strong>{r.name}</strong> },
    { key: 'designation', label: 'Designation', sortable: true },
    { key: 'department',  label: 'Department',  sortable: true, render: r => <span className="badge badge-info">{r.department}</span> },
    { key: 'email',       label: 'Email' },
    { key: 'active',      label: 'Status', render: r => <span className={`badge ${r.active ? 'badge-success' : 'badge-neutral'}`}>{r.active ? 'Active' : 'Inactive'}</span> },
  ];

  const F = ({ label, children }) => <div className="form-group"><label className="form-label">{label}</label>{children}</div>;

  return (
    <div>
      <div className="page-actions">
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Faculty & Staff</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>{data.length} members · {data.filter(f=>f.active).length} active</p>
        </div>
        <button className="btn btn-primary" onClick={openAdd}><Plus size={16} /> Add Member</button>
      </div>

      <div className="card">
        <DataTable columns={cols} data={data} searchKeys={['name', 'designation', 'department', 'email']}
          actions={row => (
            <div className="flex-row" style={{ gap: 6, justifyContent: 'flex-end' }}>
              <button className="btn btn-outline btn-sm" onClick={() => openEdit(row)}><Pencil size={14} /> Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => openDelete(row)}><Trash2 size={14} /></button>
            </div>
          )}
        />
      </div>

      <Modal isOpen={modal === 'edit'} onClose={close} title={selected ? 'Edit Faculty Member' : 'Add Faculty Member'} size="lg"
        footer={<><button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button><button className="btn btn-primary" onClick={handleSave} disabled={loading}>{loading ? 'Saving…' : 'Save'}</button></>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <F label="Photo"><ImageUpload value={form.photo} onChange={v => setField('photo', v)} label="Upload Profile Photo" /></F>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <F label="Full Name *"><input className="form-control" value={form.name} onChange={e => setField('name', e.target.value)} placeholder="E.g. Dr. Sunita Mehta" /></F>
            <F label="Designation"><input className="form-control" value={form.designation} onChange={e => setField('designation', e.target.value)} placeholder="Principal, Teacher..." /></F>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <F label="Department">
              <select className="form-control" value={form.department} onChange={e => setField('department', e.target.value)}>
                <option value="">Select…</option>
                {DEPTS.map(d => <option key={d}>{d}</option>)}
              </select>
            </F>
            <F label="Qualification"><input className="form-control" value={form.qualification} onChange={e => setField('qualification', e.target.value)} placeholder="M.Sc., B.Ed." /></F>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <F label="Email"><input type="email" className="form-control" value={form.email} onChange={e => setField('email', e.target.value)} /></F>
            <F label="Phone"><input className="form-control" value={form.phone} onChange={e => setField('phone', e.target.value)} /></F>
          </div>
          <F label="Bio / Description"><textarea className="form-control" rows={3} value={form.bio} onChange={e => setField('bio', e.target.value)} placeholder="Brief description about the faculty member..." /></F>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <F label="Display Order"><input type="number" className="form-control" value={form.order} onChange={e => setField('order', +e.target.value)} min={1} /></F>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 24 }}>
              <label className="toggle"><input type="checkbox" checked={form.active} onChange={e => setField('active', e.target.checked)} /><span className="toggle-slider" /></label>
              <span style={{ fontSize: '.875rem', fontWeight: 500 }}>Active Member</span>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modal === 'delete'} onClose={close} title="Remove Faculty Member"
        footer={<><button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button><button className="btn btn-danger" onClick={handleDelete} disabled={loading}>{loading ? 'Removing…' : 'Remove'}</button></>}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <AlertTriangle size={24} color="var(--danger)" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>Remove "<strong>{selected?.name}</strong>" from the faculty list? This cannot be undone.</p>
        </div>
      </Modal>
    </div>
  );
}
