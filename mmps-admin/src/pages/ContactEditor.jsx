import React, { useEffect, useState } from 'react';
import { useToast } from '../context/ToastContext';
import { getContact, updateContact } from '../services/contentService';
import { MapPin, Phone, Mail, Clock, Link as LinkIcon, Plus, Trash2, Save, Share2 } from 'lucide-react';

export default function ContactEditor() {
  const [form, setForm] = useState(null);
  const [sha, setSha] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => { 
    getContact().then(res => {
      setForm(res.data);
      setSha(res.sha);
    }); 
  }, []);

  const setField = (k, v) => setForm(p => ({...p, [k]: v}));

  const setPhone = (i, v) => {
    const phones = [...form.phones];
    phones[i] = { phone: v };
    setForm(p => ({...p, phones}));
  };
  const addPhone = () => setForm(p => ({...p, phones: [...(p.phones||[]), { phone: '' }]}));
  const removePhone = (i) => setForm(p => ({...p, phones: p.phones.filter((_,idx)=>idx!==i)}));

  const save = async () => {
    setLoading(true);
    try { 
      const res = await updateContact(form, sha); 
      setSha(res.content.sha); // Update SHA with the newly generated one
      toast('Contact info saved to GitHub!', 'success'); 
    }
    catch (err) { 
      toast(`Error saving: ${err.message}`, 'error'); 
    }
    finally { setLoading(false); }
  };

  if (!form) return <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Loading…</div>;

  const Section = ({ icon: Icon, title, children }) => (
    <div className="card" style={{ marginBottom: 20 }}>
      <div className="card-header">
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:'var(--primary)18', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <Icon size={18} color="var(--primary)" />
          </div>
          <h3>{title}</h3>
        </div>
      </div>
      {children}
    </div>
  );

  const F = ({label, children}) => <div className="form-group" style={{ marginBottom:14 }}><label className="form-label">{label}</label>{children}</div>;

  return (
    <div>
      <div className="page-actions">
        <div>
          <h1 style={{ fontSize:'1.4rem', fontWeight:700 }}>Contact Info Editor</h1>
          <p style={{ color:'var(--text-muted)', fontSize:'.875rem' }}>Update school contact details shown on the website</p>
        </div>
        <button className="btn btn-primary" onClick={save} disabled={loading}><Save size={16} /> {loading?'Saving…':'Save Changes'}</button>
      </div>

      <Section icon={MapPin} title="School Address">
        <F label="Full Address"><textarea className="form-control" rows={3} value={form.address} onChange={e=>setField('address',e.target.value)} /></F>
        <F label="Google Maps Embed URL"><input className="form-control" value={form.mapLink} onChange={e=>setField('mapLink',e.target.value)} placeholder="https://www.google.com/maps/embed?pb=..." /></F>
        <F label="Office Timings"><input className="form-control" value={form.timings} onChange={e=>setField('timings',e.target.value)} placeholder="Monday – Saturday: 08:00 AM – 03:00 PM" /></F>
      </Section>

      <Section icon={Phone} title="Phone Numbers">
        {(form.phones||[]).map((p,i)=>(
          <div key={i} style={{ display:'flex', gap:8, marginBottom:8 }}>
            <input className="form-control" value={p.phone} onChange={e=>setPhone(i,e.target.value)} placeholder="+91 12345 67890" />
            <button className="btn btn-danger btn-icon" onClick={()=>removePhone(i)}><Trash2 size={15} /></button>
          </div>
        ))}
        <button className="btn btn-outline btn-sm" onClick={addPhone}><Plus size={14} /> Add Phone</button>
      </Section>

      <Section icon={Mail} title="Email Addresses">
        <F label="Primary Email"><input type="email" className="form-control" value={form.email} onChange={e=>setField('email',e.target.value)} /></F>
      </Section>

      <Section icon={Share2} title="Social Media Links">
        {[
          ['facebook','Facebook URL'],['instagram','Instagram URL'],['youtube','YouTube URL'],
        ].map(([k,l])=>(
          <F key={k} label={l}><input className="form-control" value={form[k]||''} onChange={e=>setField(k,e.target.value)} placeholder={`https://...`} /></F>
        ))}
      </Section>
    </div>
  );
}
