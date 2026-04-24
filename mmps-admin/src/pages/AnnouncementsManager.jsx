import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import { useToast } from '../context/ToastContext';
import { getAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement } from '../services/mockData';
import { Plus, Pencil, Trash2, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';

const EMPTY = { title: '', content: '', date: new Date().toISOString().split('T')[0], priority: 'Medium', active: true };

export default function AnnouncementsManager() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null); // 'add' | 'edit' | 'delete'
  const [form, setForm] = useState(EMPTY);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const load = () => getAnnouncements().then(setData);
  useEffect(() => { load(); }, []);

  const openAdd = () => { setForm(EMPTY); setModal('add'); };
  const openEdit = (row) => { setForm(row); setSelected(row); setModal('edit'); };
  const openDelete = (row) => { setSelected(row); setModal('delete'); };
  const close = () => { setModal(null); setSelected(null); };

  const handleSave = async () => {
    if (!form.title.trim()) { toast('Title is required', 'error'); return; }
    setLoading(true);
    try {
      if (modal === 'add') {
        await createAnnouncement(form);
        toast('Announcement created!', 'success');
      } else {
        await updateAnnouncement(selected.id, form);
        toast('Announcement updated!', 'success');
      }
      await load();
      close();
    } catch { toast('Something went wrong', 'error'); }
    finally { setLoading(false); }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteAnnouncement(selected.id);
      toast('Announcement deleted', 'warning');
      await load();
      close();
    } catch { toast('Something went wrong', 'error'); }
    finally { setLoading(false); }
  };

  const PRIORITY_COLOR = { High: 'badge-danger', Medium: 'badge-warning', Low: 'badge-info' };

  const cols = [
    { key: 'title', label: 'Title', sortable: true, render: r => <span style={{ fontWeight: 600 }}>{r.title}</span> },
    { key: 'date',  label: 'Date',  sortable: true, render: r => format(new Date(r.date), 'dd MMM yyyy') },
    { key: 'priority', label: 'Priority', render: r => <span className={`badge ${PRIORITY_COLOR[r.priority]}`}>{r.priority}</span> },
    { key: 'active', label: 'Status', render: r => <span className={`badge ${r.active ? 'badge-success' : 'badge-neutral'}`}>{r.active ? 'Active' : 'Inactive'}</span> },
  ];

  const F = ({ label, children }) => (
    <div className="form-group"><label className="form-label">{label}</label>{children}</div>
  );

  return (
    <div>
      <div className="page-actions">
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Announcements</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>{data.length} total announcements</p>
        </div>
        <button className="btn btn-primary" onClick={openAdd}><Plus size={16} /> Add Announcement</button>
      </div>

      <div className="card">
        <DataTable columns={cols} data={data} searchKeys={['title', 'content']}
          actions={row => (
            <div className="flex-row" style={{ gap: 6, justifyContent: 'flex-end' }}>
              <button className="btn btn-outline btn-sm" onClick={() => openEdit(row)}><Pencil size={14} /> Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => openDelete(row)}><Trash2 size={14} /></button>
            </div>
          )}
        />
      </div>

      {/* Add/Edit Modal */}
      <Modal isOpen={modal === 'add' || modal === 'edit'} onClose={close}
        title={modal === 'edit' ? 'Edit Announcement' : 'New Announcement'}
        footer={<>
          <button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave} disabled={loading}>{loading ? 'Saving…' : 'Save'}</button>
        </>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <F label="Title *"><input className="form-control" value={form.title} onChange={e => setForm(p => ({...p, title: e.target.value}))} placeholder="Announcement title" /></F>
          <F label="Content"><textarea className="form-control" rows={4} value={form.content} onChange={e => setForm(p => ({...p, content: e.target.value}))} placeholder="Announcement content..." /></F>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <F label="Date"><input type="date" className="form-control" value={form.date} onChange={e => setForm(p => ({...p, date: e.target.value}))} /></F>
            <F label="Priority">
              <select className="form-control" value={form.priority} onChange={e => setForm(p => ({...p, priority: e.target.value}))}>
                <option>High</option><option>Medium</option><option>Low</option>
              </select>
            </F>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <label className="toggle"><input type="checkbox" checked={form.active} onChange={e => setForm(p => ({...p, active: e.target.checked}))} /><span className="toggle-slider" /></label>
            <span style={{ fontSize: '.875rem', fontWeight: 500 }}>Active & Visible on website</span>
          </div>
        </div>
      </Modal>

      {/* Delete Confirm */}
      <Modal isOpen={modal === 'delete'} onClose={close} title="Delete Announcement"
        footer={<>
          <button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button>
          <button className="btn btn-danger" onClick={handleDelete} disabled={loading}>{loading ? 'Deleting…' : 'Yes, Delete'}</button>
        </>}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <AlertTriangle size={24} color="var(--danger)" style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Are you sure?</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>
              You are about to permanently delete "<strong>{selected?.title}</strong>". This cannot be undone.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
