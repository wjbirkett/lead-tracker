const ANGLES = [
  "Speed up your website to ensure clients don't leave before seeing listings.",
  "Add clear calls to action like 'Get a Quote' or 'List Your Property' to increase conversions.",
  "Ensure your beautiful arrangements are easily browseable on any phone for same-day orders.",
  "Highlight your recent rebranding and add a fast quote form.",
  "Add a quick quote widget and modern design to capture leads.",
  "Optimize for mobile and add a service checklist.",
  "Add a responsive design and online appointment scheduler.",
  "Add responsive design and booking calendar.",
  "Modernize homepage and add trust signals like reviews and certifications.",
  "Mobile optimization and lead capture form above the fold.",
  "Add live chat widget and emergency service CTA.",
  "Improve loading speed and add Google review integration.",
];

export const initialLeads = [
  { id: 1, name: 'Prime Auto Tech', phone: '239-555-1313', city: 'Fort Myers', niche: 'Auto Repair', stage: 'Proposal', priority: 'High', package: 'Multi-Page', source: 'Google', value: 800, score: '4 High', angle: ANGLES[6], verified: true, emailed: true },
  { id: 2, name: 'Southwest HVAC Pros', phone: '239-555-2020', city: 'Fort Myers', niche: 'HVAC', stage: 'Qualified', priority: 'High', package: 'Multi-Page', source: 'Google', value: 800, score: '4 High', angle: ANGLES[8], verified: true, emailed: true },
  { id: 3, name: 'Sarasota Realty Partners', phone: '941-555-4040', city: 'Sarasota', niche: 'Real Estate Agents', stage: 'Proposal', priority: 'High', package: 'Multi-Page', source: 'Google', value: 800, score: '5 High', angle: ANGLES[10], verified: true, emailed: true },
  { id: 4, name: 'Cape Coral Pest Control', phone: '239-555-5050', city: 'Cape Coral', niche: 'Pest Control', stage: 'Closed', priority: 'High', package: 'Single Page', source: 'Google', value: 400, score: '4 High', angle: ANGLES[11], verified: true, emailed: true },
];

export const STAGES = ['New', 'Contacted', 'Qualified', 'Proposal', 'Closed', 'Lost'];
export const NICHES = ['Auto Repair', 'Real Estate Agents', 'Property Managers', 'Pest Control', 'Florist', 'HVAC', 'Plumbing'];
export const CITIES = ['Fort Myers', 'Naples', 'Port Charlotte', 'Punta Gorda', 'Sarasota', 'Cape Coral'];
export const PACKAGES = ['Single Page', 'Multi-Page', 'Maintenance'];
export const SOURCES = ['Google', 'Referral', 'Manual'];
export const SCORES = ['5 High', '4 High', '3 Med', '2 Low', '1 Low'];
