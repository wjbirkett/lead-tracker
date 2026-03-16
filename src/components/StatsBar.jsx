import React from 'react';

function fmtPipeline(v) {
  if (v >= 1000000) return '$' + (v / 1000000).toFixed(1) + 'M';
  if (v >= 1000) return '$' + Math.round(v / 1000) + 'k';
  return '$' + v;
}
function fmtMRR(v) {
  if (v >= 1000) return '$' + Math.round(v / 1000) + 'k';
  return '$' + v;
}

export default function StatsBar({ leads }) {
  const real = leads.filter(l => l.verified).length;
  const high = leads.filter(l => l.priority === 'High').length;
  const emailed = leads.filter(l => l.emailed).length;
  const active = leads.filter(l => ['Proposal', 'Qualified'].includes(l.stage)).length;
  const closed = leads.filter(l => l.stage === 'Closed').length;
  const pipeline = leads.filter(l => l.stage !== 'Lost').reduce((s, l) => s + l.value, 0);
  const mrr = leads.filter(l => l.stage === 'Closed').reduce((s, l) => s + l.value, 0);

  const stats = [
    { label: 'Total leads', value: leads.length, cls: 'sv-default' },
    { label: 'Real (Google)', value: real, cls: 'sv-orange' },
    { label: 'High priority', value: high, cls: 'sv-default' },
    { label: 'Emailed', value: emailed, cls: 'sv-default' },
    { label: 'Active (proposal+)', value: active, cls: 'sv-default' },
    { label: 'Closed', value: closed, cls: 'sv-green' },
    { label: 'Est. pipeline', value: fmtPipeline(pipeline), cls: 'sv-cyan' },
    { label: 'MRR potential', value: fmtMRR(mrr) + '/mo', cls: 'sv-amber' },
  ];

  return (
    <div className="stats-bar">
      {stats.map(s => (
        <div className="stat-item" key={s.label}>
          <div className="stat-label">{s.label}</div>
          <div className={`stat-value ${s.cls}`}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}
