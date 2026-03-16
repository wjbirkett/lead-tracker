import React, { useState } from 'react';
import { STAGES } from '../data/leads';

const STAGE_COLORS = {
  New: '#4a5a7a',
  Contacted: '#7b68ee',
  Qualified: '#00a8cc',
  Proposal: '#cc8800',
  Closed: '#00b85a',
  Lost: '#cc3333',
};

function scoreClass(s) {
  if (s.includes('High')) return 'score-high';
  if (s.includes('Med')) return 'score-med';
  return 'score-low';
}
function pkgClass(p) {
  return p === 'Standard' ? 'pkg-std' : p === 'Pro' ? 'pkg-pro' : 'pkg-ent';
}

export default function LeadTable({ leads, onStageChange, onEmail, onFollowUp, onEdit }) {
  const [sortField, setSortField] = useState(null);
  const [sortDir, setSortDir] = useState(1);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(d => d * -1);
    } else {
      setSortField(field);
      setSortDir(1);
    }
  };

  const sorted = [...leads].sort((a, b) => {
    if (!sortField) return 0;
    let av = a[sortField], bv = b[sortField];
    if (typeof av === 'string') { av = av.toLowerCase(); bv = bv.toLowerCase(); }
    return av > bv ? sortDir : av < bv ? -sortDir : 0;
  });

  const SortTh = ({ field, children }) => (
    <th onClick={() => handleSort(field)} style={{ cursor: 'pointer' }}>
      {children} {sortField === field ? (sortDir === 1 ? '↑' : '↓') : '↕'}
    </th>
  );

  if (sorted.length === 0) {
    return (
      <div className="table-wrap">
        <div className="no-results">No leads match your filters</div>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table className="leads-table">
        <thead>
          <tr>
            <th>#</th>
            <SortTh field="name">Business</SortTh>
            <SortTh field="city">City</SortTh>
            <SortTh field="niche">Niche</SortTh>
            <th>Stage</th>
            <SortTh field="score">Score</SortTh>
            <SortTh field="package">Package</SortTh>
            <th>Source</th>
            <th>Angle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((lead, i) => (
            <tr key={lead.id}>
              <td className="row-num">{i + 1}</td>
              <td>
                <div className="biz-name">
                  {lead.verified && <span className="verified-dot" />}
                  {lead.name}
                </div>
                <div className="biz-phone">{lead.phone}</div>
              </td>
              <td className="city-text">{lead.city}</td>
              <td className="niche-text">{lead.niche}</td>
              <td>
                <select
                  className="stage-sel"
                  value={lead.stage}
                  style={{ color: STAGE_COLORS[lead.stage] }}
                  onChange={e => onStageChange(lead.id, e.target.value)}
                >
                  {STAGES.map(s => <option key={s}>{s}</option>)}
                </select>
              </td>
              <td>
                <span className={`score-cell ${scoreClass(lead.score)}`}>
                  <span className="score-dot" />
                  {lead.score}
                </span>
              </td>
              <td>
                <span className={`pkg-badge ${pkgClass(lead.package)}`}>
                  {lead.package}
                </span>
              </td>
              <td className="src-text">{lead.source}</td>
              <td className="angle-text">{lead.angle}</td>
              <td>
                <div className="action-cell">
                  <button className="act-btn act-email" onClick={() => onEmail(lead.id)}>Email</button>
                  <button className="act-btn act-proposal" onClick={() => onEdit(lead)}>Proposal</button>
                  <button className="act-btn act-followup" onClick={() => onFollowUp(lead.id)}>Follow-up</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
