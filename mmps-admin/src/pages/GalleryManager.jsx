import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import ImageUpload from '../components/ImageUpload';
import { useToast } from '../context/ToastContext';
import { getGallery, addGalleryItem, deleteGalleryItem } from '../services/mockData';
import { Plus, Trash2, Image, AlertTriangle, Upload } from 'lucide-react';

const CATEGORIES = ['Events', 'Sports', 'Academics', 'Cultural', 'Infrastructure', 'Students'];
const EMPTY = { title: '', category: 'Events', description: '', url: null };

export default function GalleryManager() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('All');
  const toast = useToast();

  const load = () => getGallery().then(setData);
  useEffect(() => { load(); }, []);

  const close = () => { setModal(null); setSelected(null); };

  const handleUpload = async () => {
    if (!form.title.trim()) { toast('Title is required', 'error'); return; }
    setLoading(true);
    try { await addGalleryItem(form); toast('Image added to gallery!', 'success'); await load(); close(); setForm(EMPTY); }
    catch { toast('Error adding image', 'error'); }
    finally { setLoading(false); }
  };

  const handleDelete = async () => {
    setLoading(true);
    try { await deleteGalleryItem(selected.id); toast('Image deleted', 'warning'); await load(); close(); }
    catch { toast('Error deleting', 'error'); }
    finally { setLoading(false); }
  };

  const cats = ['All', ...CATEGORIES];
  const shown = filter === 'All' ? data : data.filter(g => g.category === filter);

  return (
    <div>
      <div className="page-actions">
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Photo Gallery</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>{data.length} images total</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal('add')}><Plus size={16} /> Upload Image</button>
      </div>

      {/* Category Filter */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        {cats.map(c => (
          <button key={c} className={`btn btn-sm ${filter === c ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>

      {/* Grid */}
      {shown.length === 0 ? (
        <div className="card">
          <div className="empty-state">
            <Image size={48} />
            <p style={{ fontWeight: 600 }}>No photos yet</p>
            <p style={{ fontSize: '.875rem' }}>Click "Upload Image" to add your first photo.</p>
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>
          {shown.map(item => (
            <div key={item.id} style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <div style={{ height: 140, background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {item.url ? <img src={item.url} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <Image size={36} color="var(--text-light)" />}
              </div>
              <div style={{ padding: '12px 14px' }}>
                <p style={{ fontWeight: 600, fontSize: '.875rem', marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="badge badge-info" style={{ fontSize: '.72rem' }}>{item.category}</span>
                  <button className="btn btn-ghost btn-icon btn-sm" onClick={() => { setSelected(item); setModal('delete'); }}>
                    <Trash2 size={14} color="var(--danger)" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      <Modal isOpen={modal === 'add'} onClose={close} title="Upload New Image"
        footer={<><button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button><button className="btn btn-primary" onClick={handleUpload} disabled={loading}>{loading ? 'Uploading…' : 'Upload'}</button></>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <ImageUpload value={form.url} onChange={v => setForm(p => ({...p, url: v}))} label="Select or Drop Image" />
          <div className="form-group"><label className="form-label">Title *</label><input className="form-control" value={form.title} onChange={e => setForm(p => ({...p, title: e.target.value}))} placeholder="E.g. Annual Sports Day 2026" /></div>
          <div className="form-group"><label className="form-label">Category</label>
            <select className="form-control" value={form.category} onChange={e => setForm(p => ({...p, category: e.target.value}))}>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="form-group"><label className="form-label">Description</label><textarea className="form-control" rows={2} value={form.description} onChange={e => setForm(p => ({...p, description: e.target.value}))} placeholder="Optional description" /></div>
        </div>
      </Modal>

      {/* Delete */}
      <Modal isOpen={modal === 'delete'} onClose={close} title="Delete Photo"
        footer={<><button className="btn btn-outline" onClick={close}>Cancel</button><button className="btn btn-danger" onClick={handleDelete} disabled={loading}>{loading ? 'Deleting…' : 'Delete'}</button></>}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <AlertTriangle size={24} color="var(--danger)" style={{ flexShrink: 0 }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>Permanently delete "<strong>{selected?.title}</strong>" from the gallery?</p>
        </div>
      </Modal>
    </div>
  );
}
