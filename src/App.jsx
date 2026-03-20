import React, { useState } from 'react';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import FilterBar from './components/FilterBar';
import LeadTable from './components/LeadTable';
import Modal from './components/Modal';
import { initialLeads } from './data/leads';
import './App.css';

const EMPTY_FILTERS = { niche: '', city: '', pkg: '', priority: '', stage: '' };

let idCounter = initialLeads.length + 1;

export default function App() {
  const [leads, setLeads] = useState(initialLeads);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [tglState, setTglState] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  // --- Filtering ---
  const filteredLeads = leads.filter(l => {
    const q = searchQuery.toLowerCase();
    if (q && !(l.name.toLowerCase().includes(q) || l.city.toLowerCase().includes(q) || l.niche.toLowerCase().includes(q))) return false;
    if (filters.niche && l.niche !== filters.niche) return false;
    if (filters.city && l.city !== filters.city) return false;
    if (filters.pkg && l.package !== filters.pkg) return false;
    if (filters.priority && l.priority !== filters.priority) return false;
    if (filters.stage && l.stage !== filters.stage) return false;
    if (tglState === 'real' && !l.verified) return false;
    if (tglState === 'legacy' && l.verified) return false;
    return true;
  });

  // --- Lead Actions ---
  const updateLead = (id, changes) =>
    setLeads(prev => prev.map(l => l.id === id ? { ...l, ...changes } : l));

  const handleStageChange = (id, stage) => updateLead(id, { stage });

  const handleEmail = (id) => {
    setLeads(prev => prev.map(l =>
      l.id === id ? { ...l, emailed: true, stage: l.stage === 'New' ? 'Contacted' : l.stage } : l
    ));
  };

  const handleFollowUp = (id) => {
    setLeads(prev => prev.map(l => {
      if (l.id !== id) return l;
      const next = { Contacted: 'Qualified', Qualified: 'Proposal' };
      return { ...l, stage: next[l.stage] || l.stage };
    }));
  };

  const handleSave = (formData) => {
    if (editingLead) {
      updateLead(editingLead.id, formData);
    } else {
      setLeads(prev => [...prev, { ...formData, id: idCounter++ }]);
    }
    setModalOpen(false);
    setEditingLead(null);
  };

  const openAdd = () => { setEditingLead(null); setModalOpen(true); };
  const openEdit = (lead) => { setEditingLead(lead); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setEditingLead(null); };

  return (
    <div className="app">
      <Header leads={leads} searchQuery={searchQuery} onSearch={setSearchQuery} />
      <StatsBar leads={filteredLeads} />
      <FilterBar
        filters={filters}
        onFilter={setFilters}
        tglState={tglState}
        onTgl={setTglState}
        onAdd={openAdd}
      />
      <LeadTable
        leads={filteredLeads}
        onStageChange={handleStageChange}
        onEmail={handleEmail}
        onFollowUp={handleFollowUp}
        onEdit={openEdit}
      />
      <Modal
        isOpen={modalOpen}
        lead={editingLead}
        onClose={closeModal}
        onSave={handleSave}
      />
      <footer className="demo-footer">
        ✦ Demo app built by <a href="https://websitesbywillie.com" target="_blank" rel="noopener noreferrer">websitesbywillie.com</a>
      </footer>
    </div>
  );
}
