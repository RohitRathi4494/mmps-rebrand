import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Check, X, Image as ImageIcon } from 'lucide-react';
import { Testimonial } from '../ui/testimonial';

interface TestimonialsAdminProps {
  testimonials: Testimonial[];
  onUpdate: (testimonials: Testimonial[]) => void;
}

export const TestimonialsAdmin: React.FC<TestimonialsAdminProps> = ({
  testimonials,
  onUpdate,
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Testimonial | null>(null);

  const handleAdd = () => {
    const newTestimonial: Testimonial = {
      name: 'New Person',
      designation: 'Designation',
      quote: 'Add testimonial quote here...',
      src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop',
    };
    onUpdate([...testimonials, newTestimonial]);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditForm({ ...testimonials[index] });
  };

  const handleSave = () => {
    if (editingIndex !== null && editForm) {
      const updated = [...testimonials];
      updated[editingIndex] = editForm;
      onUpdate(updated);
      setEditingIndex(null);
      setEditForm(null);
    }
  };

  const handleDelete = (index: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      const updated = testimonials.filter((_, i) => i !== index);
      onUpdate(updated);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Manage Testimonials</h2>
          <p className="text-sm text-slate-500">Update school testimonials in real-time</p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all text-sm font-semibold shadow-lg shadow-primary-900/20"
        >
          <Plus size={16} /> Add New
        </button>
      </div>

      <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
        {testimonials.map((t, index) => (
          <div 
            key={index} 
            className={`group p-4 rounded-xl border transition-all ${
              editingIndex === index 
                ? 'border-primary-500 bg-primary-50/10' 
                : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
            }`}
          >
            {editingIndex === index ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Name</label>
                    <input
                      type="text"
                      value={editForm?.name}
                      onChange={(e) => setEditForm(prev => prev ? { ...prev, name: e.target.value } : null)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Designation</label>
                    <input
                      type="text"
                      value={editForm?.designation}
                      onChange={(e) => setEditForm(prev => prev ? { ...prev, designation: e.target.value } : null)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Image URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editForm?.src}
                      onChange={(e) => setEditForm(prev => prev ? { ...prev, src: e.target.value } : null)}
                      className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800">
                      <img src={editForm?.src} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Quote</label>
                  <textarea
                    value={editForm?.quote}
                    onChange={(e) => setEditForm(prev => prev ? { ...prev, quote: e.target.value } : null)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary-500 outline-none min-h-[100px]"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button onClick={() => setEditingIndex(null)} className="px-4 py-2 text-sm text-slate-500 hover:text-slate-700">Cancel</button>
                  <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-emerald-500/20">
                    <Check size={16} /> Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <img src={t.src} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 dark:text-white truncate">{t.name}</h4>
                  <p className="text-xs text-slate-500 truncate">{t.designation}</p>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => handleEdit(index)}
                    className="p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(index)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {testimonials.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <ImageIcon className="text-slate-300" size={32} />
            </div>
            <p className="text-slate-500">No testimonials added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};
