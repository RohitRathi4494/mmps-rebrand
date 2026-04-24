import React, { useEffect, useState } from 'react';
import { useToast } from '../context/ToastContext';
import { getHero, updateHero, uploadMedia } from '../services/contentService';
import { Save, Plus, Trash2 } from 'lucide-react';
import ImageUpload from '../components/ImageUpload';

const F = ({ label, hint, children }) => (
  <div className="form-group" style={{ marginBottom: 16 }}>
    <label className="form-label">{label}</label>
    {children}
    {hint && <p style={{ fontSize: '.75rem', color: 'var(--text-light)', marginTop: 4 }}>{hint}</p>}
  </div>
);

export default function HeroEditor() {
  const [form, setForm] = useState(null);
  const [sha, setSha] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => { 
    getHero().then(res => {
      setForm(res.data);
      setSha(res.sha);
    }); 
  }, []);

  const setField = (k,v) => setForm(p => ({...p,[k]:v}));
  const setStat = (i,k,v) => { const stats=[...form.stats]; stats[i]={...stats[i],[k]:v}; setField('stats',stats); };
  const addStat = () => setField('stats',[...form.stats,{value:'',label:'',emoji:'⭐'}]);
  const removeStat = (i) => setField('stats', form.stats.filter((_,idx)=>idx!==i));

  const save = async () => {
    setLoading(true);
    try { 
      let finalData = { ...form };
      // If the background is a new base64 string, upload it
      if (form.backgroundImage && form.backgroundImage.startsWith('data:')) {
        // Force the name to school.webp as it's the standard background for the site
        finalData.backgroundImage = await uploadMedia(form.backgroundImage, 'school.webp');
      }

      const res = await updateHero(finalData, sha); 
      setSha(res.content.sha); // Update SHA with the newly generated one
      toast('Hero section saved to GitHub!', 'success'); 
    }
    catch (err) { 
      toast(`Error saving: ${err.message}`, 'error'); 
    }
    finally { setLoading(false); }
  };

  if (!form) return <div style={{ padding:40, textAlign:'center', color:'var(--text-muted)' }}>Loading…</div>;



  return (
    <div>
      <div className="page-actions">
        <div>
          <h1 style={{ fontSize:'1.4rem', fontWeight:700 }}>Hero Section Editor</h1>
          <p style={{ color:'var(--text-muted)', fontSize:'.875rem' }}>Edit the homepage hero banner text and statistics</p>
        </div>
        <button className="btn btn-primary" onClick={save} disabled={loading}><Save size={16} /> {loading?'Saving…':'Save Changes'}</button>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
        <div>
          <div className="card" style={{ marginBottom:20 }}>
            <div className="card-header"><h3>Banner Text</h3></div>
            <F label="Badge / Pill Text" hint="Small label above the main title"><input className="form-control" value={form.badge} onChange={e=>setField('badge',e.target.value)} /></F>
            <F label="Main Title (Line 1)"><input className="form-control" value={form.title} onChange={e=>setField('title',e.target.value)} /></F>
            <F label="Highlighted Text (Line 2 — displayed in gold)" hint="This appears below the main title in accent color"><input className="form-control" value={form.highlight} onChange={e=>setField('highlight',e.target.value)} /></F>
            <F label="Subtitle / Description"><textarea className="form-control" rows={3} value={form.subtitle} onChange={e=>setField('subtitle',e.target.value)} /></F>
          </div>

          <div className="card">
            <div className="card-header"><h3>Background Image</h3></div>
            <ImageUpload value={form.backgroundImage} onChange={v => setField('backgroundImage', v)} label="Upload New Hero Background" />
            <p style={{ color:'var(--text-muted)', fontSize:'.8rem', marginTop:12 }}>Note: The hero background is a large image. Currently using /school.webp from the public folder.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Statistics Strip</h3>
            <button className="btn btn-outline btn-sm" onClick={addStat}><Plus size={14} /> Add Stat</button>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {form.stats.map((stat,i) => (
              <div key={i} style={{ padding:14, background:'var(--bg)', borderRadius:'var(--radius)', border:'1px solid var(--border)' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
                  <span style={{ fontWeight:600, fontSize:'.85rem' }}>Statistic #{i+1}</span>
                  <button className="btn btn-ghost btn-icon btn-sm" onClick={()=>removeStat(i)}><Trash2 size={14} color="var(--danger)" /></button>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 60px', gap:8 }}>
                  <input className="form-control" value={stat.value} onChange={e=>setStat(i,'value',e.target.value)} placeholder="800+" style={{ fontSize:'.85rem' }} />
                  <input className="form-control" value={stat.label} onChange={e=>setStat(i,'label',e.target.value)} placeholder="Students" style={{ fontSize:'.85rem' }} />
                  <input className="form-control" value={stat.emoji} onChange={e=>setStat(i,'emoji',e.target.value)} placeholder="🎓" style={{ textAlign:'center', fontSize:'1.2rem' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview strip */}
      <div className="card" style={{ marginTop:20 }}>
        <div className="card-header"><h3>Live Preview</h3></div>
        <div style={{ background:'linear-gradient(135deg, #0d1b3e 0%, #1a3c7e 100%)', borderRadius:12, padding:'32px 40px', color:'white' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 14px', borderRadius:99, border:'1px solid rgba(245,166,35,.4)', color:'#f5a623', fontSize:'.85rem', fontWeight:600, marginBottom:16 }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:'#f5a623' }} />
            {form.badge}
          </div>
          <h1 style={{ fontSize:'clamp(2rem, 5vw, 3.5rem)', fontWeight:700, marginBottom:8, lineHeight:1.1 }}>
            {form.title}<br /><span style={{ color:'#f5a623' }}>{form.highlight}</span>
          </h1>
          <p style={{ color:'rgba(255,255,255,.7)', maxWidth:500, marginBottom:24 }}>{form.subtitle}</p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            {form.stats.map((s,i)=>(
              <div key={i} style={{ background:'rgba(255,255,255,.1)', borderRadius:12, padding:'12px 20px', textAlign:'center', minWidth:100 }}>
                <div style={{ fontSize:'1.5rem', marginBottom:4 }}>{s.emoji}</div>
                <div style={{ fontWeight:700, fontSize:'1.25rem' }}>{s.value}</div>
                <div style={{ fontSize:'.75rem', color:'rgba(255,255,255,.6)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
