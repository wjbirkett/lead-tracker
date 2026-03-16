import React, { useState, useEffect } from 'react';
import { STAGES, NICHES, CITIES, PACKAGES, SOURCES, SCORES } from '../data/leads';

const EMPTY = {
  name: '', phone: '', city: 'Fort Myers', niche: 'Auto Repair',
  stage: 'New', priority: 'High', package: 'Standard', source: 'Legacy',
  value: 997, score: '2 Low', angle: '', verified: false, emailed: false,
};

export default function Modal({ isOpen, lead, onClose, onSave }) {
  const [form, setForm] = useState(EMPTY);
  const isEditing = !!lead;

  useEffect(() => {
    setForm(lead ? { ...lead } : { ...EMPTY });
  }, [lead, isOpen]);

  if (!isOpen) return null;

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, value: parseInt(form.value) || 997, verified: form.source === 'Google' });
  };

  return (
    <div className="modal-bg open" onClick={e => { if (e.target.classList.contains('modal-bg')) onClose(); }}>
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✕</button>
        <div className="modal-title">{isEditing ? 'Edit Lead' : 'Add Lead'}</div>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="fg form-full">
              <label>Business Name</label>
              <input type="text" required value={form.name} onChange={e => set('name', e.target.value)} placeholder="Prime Realty Group" />
            </div>
            <div className="fg">
              <label>Phone</label>
              <input type="text" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="239-555-0100" />
            </div>
            <div className="fg">
              <label>City</label>
              <select value={form.city} onChange={e => set('city', e.target.value)}>
                {CITIES.map(c => <option key={c}>{c}</option>)}
                <option>Other</option>
              </select>
            </div>
            <div className="fg">
              <label>Niche</label>
              <select value={form.niche} onChange={e => set('niche', e.target.value)}>
                {NICHES.map(n => <option key={n}>{n}</option>)}
                <option>Other</option>
              </select>
            </div>
            <div className="fg">
              <label>Stage</label>
              <select value={form.stage} onChange={e => set('stage', e.target.value)}>
                {STAGES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="fg">
              <label>Priority</label>
              <select value={form.priority} onChange={e => set('priority', e.target.value)}>
                {['High', 'Medium', 'Low'].map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div className="fg">
              <label>Package</label>
              <select value={form.package} onChange={e => set('package', e.target.value)}>
                {PACKAGES.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div className="fg">
              <label>Source</label>
              <select value={form.source} onChange={e => set('source', e.target.value)}>
                {SOURCES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="fg">
              <label>Value ($/mo)</label>
              <input type="number" value={form.value} onChange={e => set('value', e.target.value)} placeholder="997" />
            </div>
            <div className="fg">
              <label>Score</label>
              <select value={form.score} onChange={e => set('score', e.target.value)}>
                {SCORES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="fg form-full">
              <label>Pitch Angle</label>
              <textarea rows={2} value={form.angle} onChange={e => set('angle', e.target.value)} placeholder="Describe the pitch angle for this lead..." />
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="m-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="m-save">Save Lead</button>
          </div>
        </form>
      </div>
    </div>
  );
}
