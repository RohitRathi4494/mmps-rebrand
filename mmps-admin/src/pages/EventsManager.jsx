import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import ImageUpload from '../components/ImageUpload';
import { useToast } from '../context/ToastContext';
import { getEvents, createEvent, updateEvent, deleteEvent, uploadMedia } from '../services/contentService';
import { Plus, Pencil, Trash2, AlertTriangle, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const EMPTY = { title: '', description: '', date: new Date().toISOString().split('T')[0], endDate: '', location: '', category: 'Academic', image: null, active: true };
const CATS = ['Academic', 'Cultural', 'Sports', 'Examination', 'Holiday', 'Other'];

const F = ({label, children}) => <div className="form-group"><label className="form-label">{label}</label>{children}</div>;

export default function EventsManager() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const load = () => getEvents().then(setData);
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
      let finalData = { ...form };
      // If the image is a base64 string, upload it first
      if (form.image && form.image.startsWith('data:')) {
        const ext = form.image.split(';')[0].split('/')[1] || 'jpg';
        const fileName = `event_${Date.now()}.${ext}`;
        finalData.image = await uploadMedia(form.image, fileName);
      }

      if (!selected) { await createEvent(finalData); toast('Event created!', 'success'); }
      else { await updateEvent(selected.id, finalData); toast('Event updated!', 'success'); }
      await load(); close();
    } catch (err) {
      toast(`Error saving: ${err.message}`, 'error');
    } finally { setLoading(false); }
  };

  const del = async () => {
    setLoading(true);
    try { await deleteEvent(selected.id); toast('Event deleted', 'warning'); await load(); close(); }
    catch { toast('Error deleting', 'error'); } finally { setLoading(false); }
  };

  const CAT_COLORS = { Academic:'badge-info', Cultural:'badge-warning', Sports:'badge-success', Examination:'badge-danger', Holiday:'badge-neutral', Other:'badge-neutral' };

  const cols = [
    { key: 'title', label: 'Event', sortable: true, render: r => <strong>{r.title}</strong> },
    { key: 'date', label: 'Date', sortable: true, render: r => format(new Date(r.date), 'dd MMM yyyy') },
    { key: 'location', label: 'Location' },
    { key: 'category', label: 'Category', render: r => <span className={`badge ${CAT_COLORS[r.category]}`}>{r.category}</span> },
    { key: 'active', label: 'Status', render: r => <span className={`badge ${r.active ? 'badge-success' : 'badge-neutral'}`}>{r.active ? 'Active' : 'Inactive'}</span> },
  ];



  return (
    <div>
      <div className="page-actions">
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Events Manager</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>{data.length} events · {data.filter(e => new Date(e.date) >= new Date()).length} upcoming</p>
        </div>
        <button className="btn btn-primary" onClick={openAdd}><Plus size={16} /> Add Event</button>
      </div>

      <div className="card">
        <DataTable columns={cols} data={data} searchKeys={['title','location','category']}
          actions={r => (
            <div className="flex-row" style={{ gap:6, justifyContent:'flex-end' }}>
              <button className="btn btn-outline btn-sm" onClick={() => openEdit(r)}><Pencil size={14} /> Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => openDelete(r)}><Trash2 size={14} /></button>
            </div>
          )}
        />
      </div>

      <Modal isOpen={modal==='edit'} onClose={close} title={selected ? 'Edit Event' : 'New Event'}
        footer={<><button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button><button className="btn btn-primary" onClick={save} disabled={loading}>{loading ? 'Saving…' : 'Save'}</button></>}>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <F label="Event Title *"><input className="form-control" value={form.title} onChange={e=>setField('title',e.target.value)} /></F>
          <F label="Description"><textarea className="form-control" rows={3} value={form.description} onChange={e=>setField('description',e.target.value)} /></F>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <F label="Start Date"><input type="date" className="form-control" value={form.date} onChange={e=>setField('date',e.target.value)} /></F>
            <F label="End Date (optional)"><input type="date" className="form-control" value={form.endDate} onChange={e=>setField('endDate',e.target.value)} /></F>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <F label="Location"><input className="form-control" value={form.location} onChange={e=>setField('location',e.target.value)} /></F>
            <F label="Category"><select className="form-control" value={form.category} onChange={e=>setField('category',e.target.value)}>{CATS.map(c=><option key={c}>{c}</option>)}</select></F>
          </div>
          <F label="Event Image"><ImageUpload value={form.image} onChange={v=>setField('image',v)} /></F>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <label className="toggle"><input type="checkbox" checked={form.active} onChange={e=>setField('active',e.target.checked)} /><span className="toggle-slider" /></label>
            <span style={{ fontSize:'.875rem', fontWeight:500 }}>Active & Visible</span>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modal==='delete'} onClose={close} title="Delete Event"
        footer={<><button className="btn btn-outline" onClick={close}>Cancel</button><button className="btn btn-danger" onClick={del} disabled={loading}>{loading?'Deleting…':'Delete'}</button></>}>
        <div style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
          <AlertTriangle size={24} color="var(--danger)" />
          <p style={{ color:'var(--text-muted)', fontSize:'.875rem' }}>Delete event "<strong>{selected?.title}</strong>"?</p>
        </div>
      </Modal>
    </div>
  );
}
