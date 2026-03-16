import React from 'react';
import { NICHES, CITIES, PACKAGES, STAGES } from '../data/leads';

export default function FilterBar({ filters, onFilter, tglState, onTgl, onAdd }) {
  const update = (key, val) => onFilter({ ...filters, [key]: val });

  return (
    <div className="filter-bar">
      <select className="fsel" value={filters.niche} onChange={e => update('niche', e.target.value)}>
        <option value="">All niches</option>
        {NICHES.map(n => <option key={n}>{n}</option>)}
      </select>

      <select className="fsel" value={filters.city} onChange={e => update('city', e.target.value)}>
        <option value="">All cities</option>
        {CITIES.map(c => <option key={c}>{c}</option>)}
      </select>

      <select className="fsel" value={filters.pkg} onChange={e => update('pkg', e.target.value)}>
        <option value="">All packages</option>
        {PACKAGES.map(p => <option key={p}>{p}</option>)}
      </select>

      <select className="fsel" value={filters.priority} onChange={e => update('priority', e.target.value)}>
        <option value="">Any priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select className="fsel" value={filters.stage} onChange={e => update('stage', e.target.value)}>
        <option value="">All stages</option>
        {STAGES.map(s => <option key={s}>{s}</option>)}
      </select>

      <div className="toggle-group">
        {['all', 'real', 'legacy'].map(t => (
          <button
            key={t}
            className={`tgl${tglState === t ? ' active' : ''}`}
            onClick={() => onTgl(t)}
          >
            {t === 'all' ? 'All' : t === 'real' ? '✓ Real (Google)' : 'Legacy'}
          </button>
        ))}
      </div>

      <div className="filter-bar-right">
        <button className="add-btn" onClick={onAdd}>+ Add Lead</button>
      </div>
    </div>
  );
}
