import React, { useRef, useState } from 'react';
import { Upload, X, Image as ImgIcon } from 'lucide-react';

export default function ImageUpload({ value, onChange, label = 'Upload Image' }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef();

  const handle = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    if (file.size > 5 * 1024 * 1024) { alert('Image must be under 5MB'); return; }
    const reader = new FileReader();
    reader.onload = e => onChange(e.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {value ? (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={value} alt="preview" className="upload-preview" style={{ maxHeight: 160, borderRadius: 10 }} />
          <button className="btn btn-danger btn-sm" style={{ position: 'absolute', top: 6, right: 6 }}
            onClick={() => onChange(null)}><X size={14} /></button>
        </div>
      ) : (
        <div
          className={`upload-zone ${dragging ? 'dragging' : ''}`}
          onClick={() => inputRef.current.click()}
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); handle(e.dataTransfer.files[0]); }}
        >
          <ImgIcon size={32} style={{ marginBottom: 10, opacity: .5 }} />
          <p style={{ fontWeight: 600, marginBottom: 4 }}>{label}</p>
          <p style={{ fontSize: '.8rem', opacity: .7 }}>Drag & drop or click to browse · Max 5MB</p>
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }}
        onChange={e => handle(e.target.files[0])} />
    </div>
  );
}
