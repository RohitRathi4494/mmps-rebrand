import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import ImageUpload from '../components/ImageUpload';
import { useToast } from '../context/ToastContext';
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../services/contentService';
import { Plus, Pencil, Trash2, AlertTriangle, Star } from 'lucide-react';

const EMPTY = { name: '', role: 'Parent', content: '', rating: 5, photo: null, active: true };
const ROLES = ['Parent', 'Student', 'Alumni', 'Teacher'];

export default function TestimonialsManager() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const load = () => getTestimonials().then(setData);
  useEffect(() => { load(); }, []);

  const setField = (k,v) => setForm(p => ({...p,[k]:v}));
  const close = () => { setModal(null); setSelected(null); };
  const openAdd = () => { setForm(EMPTY); setModal('edit'); };
  const openEdit = (r) => { setForm(r); setSelected(r); setModal('edit'); };
  const openDelete = (r) => { setSelected(r); setModal('delete'); };

  const save = async () => {
    if (!form.name.trim() || !form.content.trim()) { toast('Name and Content are required', 'error'); return; }
    setLoading(true);
    try {
      if (!selected) { await createTestimonial(form); toast('Testimonial added!', 'success'); }
      else { await updateTestimonial(selected.id, form); toast('Updated!', 'success'); }
      await load(); close();
    } catch { toast('Error saving', 'error'); } finally { setLoading(false); }
  };

  const del = async () => {
    setLoading(true);
    try { await deleteTestimonial(selected.id); toast('Deleted', 'warning'); await load(); close(); }
    catch { toast('Error', 'error'); } finally { setLoading(false); }
  };

  const StarRating = ({ value, onChange }) => (
    <div style={{ display:'flex', gap:4 }}>
      {[1,2,3,4,5].map(n => (
        <button key={n} type="button" onClick={() => onChange(n)} style={{ background:'none', border:'none', cursor:'pointer', padding:2 }}>
          <Star size={20} fill={n <= value ? '#f5a623' : 'none'} color={n <= value ? '#f5a623' : 'var(--border)'} />
        </button>
      ))}
    </div>
  );

  const cols = [
    { key: 'name', label: 'Name', sortable: true, render: r => <strong>{r.name}</strong> },
    { key: 'role', label: 'Role', render: r => <span className="badge badge-info">{r.role}</span> },
    { key: 'rating', label: 'Rating', render: r => <div style={{ display:'flex', gap:2 }}>{[...Array(5)].map((_,i)=><Star key={i} size={13} fill={i<r.rating?'#f5a623':'none'} color={i<r.rating?'#f5a623':'var(--border)'} />)}</div> },
    { key: 'content', label: 'Quote', render: r => <span style={{ color:'var(--text-muted)', fontSize:'.85rem' }}>"{r.content.slice(0,60)}{r.content.length>60?'…':'\"'}</span> },
    { key: 'active', label: 'Status', render: r => <span className={`badge ${r.active?'badge-success':'badge-neutral'}`}>{r.active?'Active':'Hidden'}</span> },
  ];

  const F = ({label, children}) => <div className="form-group"><label className="form-label">{label}</label>{children}</div>;

  return (
    <div>
      <div className="page-actions">
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Testimonials</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>{data.length} testimonials · {data.filter(t=>t.active).length} active</p>
        </div>
        <button className="btn btn-primary" onClick={openAdd}><Plus size={16} /> Add Testimonial</button>
      </div>

      <div className="card">
        <DataTable columns={cols} data={data} searchKeys={['name','role','content']}
          actions={r => (
            <div className="flex-row" style={{ gap:6, justifyContent:'flex-end' }}>
              <button className="btn btn-outline btn-sm" onClick={() => openEdit(r)}><Pencil size={14} /> Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => openDelete(r)}><Trash2 size={14} /></button>
            </div>
          )}
        />
      </div>

      <Modal isOpen={modal==='edit'} onClose={close} title={selected?'Edit Testimonial':'New Testimonial'}
        footer={<><button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button><button className="btn btn-primary" onClick={save} disabled={loading}>{loading?'Saving…':'Save'}</button></>}>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <F label="Photo"><ImageUpload value={form.photo} onChange={v=>setField('photo',v)} label="Upload Profile Photo" /></F>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <F label="Full Name *"><input className="form-control" value={form.name} onChange={e=>setField('name',e.target.value)} /></F>
            <F label="Role"><select className="form-control" value={form.role} onChange={e=>setField('role',e.target.value)}>{ROLES.map(r=><option key={r}>{r}</option>)}</select></F>
          </div>
          <F label="Quote / Content *"><textarea className="form-control" rows={4} value={form.content} onChange={e=>setField('content',e.target.value)} placeholder="What did they say?" /></F>
          <F label="Rating"><StarRating value={form.rating} onChange={v=>setField('rating',v)} /></F>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <label className="toggle"><input type="checkbox" checked={form.active} onChange={e=>setField('active',e.target.checked)} /><span className="toggle-slider" /></label>
            <span style={{ fontSize:'.875rem', fontWeight:500 }}>Active & Visible on website</span>
          </div>
        </div>
      </Modal>

      <Modal isOpen={modal==='delete'} onClose={close} title="Delete Testimonial"
        footer={<><button className="btn btn-outline" onClick={close}>Cancel</button><button className="btn btn-danger" onClick={del} disabled={loading}>{loading?'Deleting…':'Delete'}</button></>}>
        <div style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
          <AlertTriangle size={24} color="var(--danger)" />
          <p style={{ color:'var(--text-muted)', fontSize:'.875rem' }}>Delete testimonial from "<strong>{selected?.name}</strong>"?</p>
        </div>
      </Modal>
    </div>
  );
}
