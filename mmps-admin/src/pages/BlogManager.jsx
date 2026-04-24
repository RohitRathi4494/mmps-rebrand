import React, { useEffect, useState, lazy, Suspense } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import ImageUpload from '../components/ImageUpload';
import { useToast } from '../context/ToastContext';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../services/mockData';
import { Plus, Pencil, Trash2, AlertTriangle, Eye } from 'lucide-react';
import { format } from 'date-fns';

// Lazy-load Quill to avoid SSR issues
const ReactQuill = lazy(() => import('react-quill'));

const EMPTY = { title: '', slug: '', excerpt: '', content: '', author: 'MMPS Administration', category: 'General', tags: '', image: null, status: 'draft', date: new Date().toISOString().split('T')[0] };

const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function BlogManager() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const load = () => getBlogs().then(setData);
  useEffect(() => { load(); }, []);

  const openAdd  = () => { setForm(EMPTY); setModal('edit'); };
  const openEdit = (row) => { setForm({...row, tags: Array.isArray(row.tags) ? row.tags.join(', ') : row.tags}); setSelected(row); setModal('edit'); };
  const openDelete = (row) => { setSelected(row); setModal('delete'); };
  const close = () => { setModal(null); setSelected(null); };

  const setField = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSave = async (status) => {
    if (!form.title.trim()) { toast('Title is required', 'error'); return; }
    setLoading(true);
    const payload = { ...form, status: status ?? form.status, slug: form.slug || slugify(form.title), tags: typeof form.tags === 'string' ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : form.tags };
    try {
      if (!selected) { await createBlog(payload); toast('Blog post created!', 'success'); }
      else { await updateBlog(selected.id, payload); toast('Blog post updated!', 'success'); }
      await load(); close();
    } catch { toast('Error saving post', 'error'); }
    finally { setLoading(false); }
  };

  const handleDelete = async () => {
    setLoading(true);
    try { await deleteBlog(selected.id); toast('Blog post deleted', 'warning'); await load(); close(); }
    catch { toast('Error deleting post', 'error'); }
    finally { setLoading(false); }
  };

  const cols = [
    { key: 'title', label: 'Title', sortable: true, render: r => <span style={{ fontWeight: 600 }}>{r.title}</span> },
    { key: 'author', label: 'Author', sortable: true },
    { key: 'category', label: 'Category', render: r => <span className="badge badge-info">{r.category}</span> },
    { key: 'date', label: 'Date', sortable: true, render: r => format(new Date(r.date), 'dd MMM yyyy') },
    { key: 'status', label: 'Status', render: r => <span className={`badge ${r.status === 'published' ? 'badge-success' : 'badge-warning'}`}>{r.status}</span> },
  ];

  const F = ({ label, children }) => <div className="form-group"><label className="form-label">{label}</label>{children}</div>;

  return (
    <div>
      <div className="page-actions">
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Blog Manager</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>{data.filter(b=>b.status==='published').length} published · {data.filter(b=>b.status==='draft').length} drafts</p>
        </div>
        <button className="btn btn-primary" onClick={openAdd}><Plus size={16} /> New Post</button>
      </div>

      <div className="card">
        <DataTable columns={cols} data={data} searchKeys={['title', 'author', 'category']}
          actions={row => (
            <div className="flex-row" style={{ gap: 6, justifyContent: 'flex-end' }}>
              <button className="btn btn-outline btn-sm" onClick={() => openEdit(row)}><Pencil size={14} /> Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => openDelete(row)}><Trash2 size={14} /></button>
            </div>
          )}
        />
      </div>

      {/* Editor Modal */}
      <Modal isOpen={modal === 'edit'} onClose={close} title={selected ? 'Edit Post' : 'New Blog Post'} size="lg"
        footer={<>
          <button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button>
          <button className="btn btn-outline" onClick={() => handleSave('draft')} disabled={loading}>Save as Draft</button>
          <button className="btn btn-primary" onClick={() => handleSave('published')} disabled={loading}>{loading ? 'Saving…' : 'Publish'}</button>
        </>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <F label="Post Title *"><input className="form-control" value={form.title} onChange={e => { setField('title', e.target.value); if (!selected) setField('slug', slugify(e.target.value)); }} placeholder="Enter post title" /></F>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <F label="URL Slug"><input className="form-control" value={form.slug} onChange={e => setField('slug', e.target.value)} /></F>
            <F label="Category">
              <select className="form-control" value={form.category} onChange={e => setField('category', e.target.value)}>
                {['General','Academics','Sports','Culture','Achievements','Announcements'].map(c=><option key={c}>{c}</option>)}
              </select>
            </F>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <F label="Author"><input className="form-control" value={form.author} onChange={e => setField('author', e.target.value)} /></F>
            <F label="Publish Date"><input type="date" className="form-control" value={form.date} onChange={e => setField('date', e.target.value)} /></F>
          </div>
          <F label="Excerpt / Summary"><textarea className="form-control" rows={2} value={form.excerpt} onChange={e => setField('excerpt', e.target.value)} placeholder="Brief post summary..." /></F>
          <F label="Tags (comma separated)"><input className="form-control" value={form.tags} onChange={e => setField('tags', e.target.value)} placeholder="sports, award, students" /></F>
          <F label="Featured Image"><ImageUpload value={form.image} onChange={v => setField('image', v)} /></F>
          <F label="Post Content">
            <Suspense fallback={<div className="skeleton" style={{ height: 250 }} />}>
              <ReactQuill value={form.content} onChange={v => setField('content', v)} theme="snow" />
            </Suspense>
          </F>
        </div>
      </Modal>

      {/* Delete */}
      <Modal isOpen={modal === 'delete'} onClose={close} title="Delete Post"
        footer={<><button className="btn btn-outline" onClick={close} disabled={loading}>Cancel</button><button className="btn btn-danger" onClick={handleDelete} disabled={loading}>{loading ? 'Deleting…' : 'Delete'}</button></>}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <AlertTriangle size={24} color="var(--danger)" style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}>Permanently delete "<strong>{selected?.title}</strong>"? This cannot be undone.</p>
        </div>
      </Modal>
    </div>
  );
}
