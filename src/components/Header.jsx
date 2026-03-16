import React from 'react';

export default function Header({ leads, searchQuery, onSearch }) {
  const totalLeads = leads.length;
  const verifiedCount = leads.filter(l => l.verified).length;

  return (
    <div className="header">
      <div className="header-left">
        <div className="title">Lead Tracker</div>
        <div className="subtitle">
          Florida · <span>{totalLeads}</span> leads ·{' '}
          <span className="verified-count">{verifiedCount} verified real</span>
        </div>
      </div>
      <div className="search-wrap">
        <span className="search-icon">⌕</span>
        <input
          type="text"
          value={searchQuery}
          onChange={e => onSearch(e.target.value)}
          placeholder="Search business, city, niche..."
        />
      </div>
    </div>
  );
}
