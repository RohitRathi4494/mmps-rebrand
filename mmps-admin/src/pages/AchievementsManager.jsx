import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import ImageUpload from '../components/ImageUpload';
import { useToast } from '../context/ToastContext';
import { getAchievements, createAchievement, updateAchievement, deleteAchievement } from '../services/mockData';
import { Plus, Pencil, Trash2, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';

const EMPTY = { title: '', description: '', date: new Date().toISOString().split('T')[0], category: 'Academic', studentName: '', grade: '', image: null, active: true };
const CATS = ['Academic', 'Sports', 'Cultural', 'Other'];

export default function AchievementsManager() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const load = () => getAchievements().then(setData);
  useEffect(() => { load(); }, []);

  const setField = (k,v) => setForm(p => ({...p,[k]:v}));
  const close = () => { setModal(null); setSelected(null); };
  const openAdd = () => { setForm(EMPTY); setModal('edit'); };
  const openEdit = (r) => { setForm(r); setSelected(r); setModal('edit'); };
  const openDelete = (r) => { setSelected(r); setModal('delete'); };

  const save = async () => {
    if (!form.title.trim()) { toast('Title is required', 'error'); return; }
    setLoading(true);
    try {
      if (!selected) { await createAchievement(form); toast('Achievement added!', 'success'); }
      else { await updateAchievement(selected.id, form); toast('Updated!', 'success'); }
      await load(); close();
    } catch { toast('Error saving', 'error'); } finally { setLoading(false); }
  };

  const del = async () => {
    setLoading(true);
    try { await deleteAchievement(selected.id); toast('Deleted', 'warning'); await load(); close(); }
    catch { toast('Error', 'error'); } finally { setLoading(false); }
  };

  const CAT_COLORS = { Academic:'badge-info', Sports:'badge-success', Cultural:'badge-warning', Other:'badge-neutral' };

  const cols = [
    { key: 'title', label: 'Achievement', sortable: true, render: r => <strong>{r.title}</strong> },
    { key: 'studentName', label: 'Student', render: r => r.studentName || '—' },
    { key: 'category', label: 'Category', render: r => <span className={`badge ${CAT_COLORS[r.category]}`}>{r.category}</span> },
    { key: 'date', label: 'Date', sortable: true, render: r => format(new Date(r.date), 'dd MMM yyyy') },
    { key: 'active', label: 'Status', render: r => <span className={`badge ${r.active ? 'badge-success' : 'badge-neutral'}`}>{r.active ? 'Active' : 'Hidden'}</span> },
  ];

  const F = ({label, children}) => <div className="form-group"><label className="form-label">{label}</label>{children}</div>;

  return (
    <div>
      <div className="page-actions">
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Achievements</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>{data.length} achievement records</p>
        </div>
        <button className="btn btn-primary" onClick={openAdd}><Plus size={16} /> Add Achievement</button>
      </div>

      <div className="card">
        <DataTable columns={cols} data={data} searchKeys={['title','studentName','category']}
          actions={r => (
            <div className="flex-row" style={{ gap:6, justifyContent:'flex-end' }}>
              <button className="btn btn-outline btn-sm" onClick={() => openEdit(r)}><Pencil size={14} /> Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => openDelete(r)}><Trash2 size={14} /></button>
            </div>
          )}
        />
      </div>

      <Modal isOpen={modal==='edit'} onClose={close} title={selected ? 'Edit Achievement' : 'New Achievement'}
        footer={<><button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button><button className="btn btn-primary" onClick={save} disabled={loading}>{loading?'Saving…':'Save'}</button></>}>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <F label="Title *"><input className="form-control" value={form.title} onChange={e=>setField('title',e.target.value)} /></F>
          <F label="Description"><textarea className="form-control" rows={3} value={form.description} onChange={e=>setField('description',e.target.value)} /></F>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <F label="Category"><select className="form-control" value={form.category} onChange={e=>setField('category',e.target.value)}>{CATS.map(c=><option key={c}>{c}</option>)}</select></F>
            <F label="Date"><input type="date" className="form-control" value={form.date} onChange={e=>setField('date',e.target.value)} /></F>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <F label="Student Name (if applicable)"><input className="form-control" value={form.studentName} onChange={e=>setField('studentName',e.target.value)} /></F>
            <F label="Grade / Class"><input className="form-control" value={form.grade} onChange={e=>setField('grade',e.target.value)} placeholder="E.g. X, XII" /></F>
          </div>
          <F label="Image"><ImageUpload value={form.image} onChange={v=>setField('image',v)} /></F>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <label className="toggle"><input type="checkbox" checked={form.active} onChange={e=>setField('active',e.target.checked)} /><span className="toggle-slider" /></label>
            <span style={{ fontSize:'.875rem', fontWeight:500 }}>Active & Visible</span>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modal==='delete'} onClose={close} title="Delete Achievement"
        footer={<><button className="btn btn-outline" onClick={close}>Cancel</button><button className="btn btn-danger" onClick={del} disabled={loading}>{loading?'Deleting…':'Delete'}</button></>}>
        <div style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
          <AlertTriangle size={24} color="var(--danger)" />
          <p style={{ color:'var(--text-muted)', fontSize:'.875rem' }}>Delete "<strong>{selected?.title}</strong>"?</p>
        </div>
      </Modal>
    </div>
  );
}
