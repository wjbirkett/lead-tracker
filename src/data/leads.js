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
  { id: 1, name: 'Prime Realty Group', phone: '239-555-1515', city: 'Fort Myers', niche: 'Real Estate Agents', stage: 'New', priority: 'Medium', package: 'Standard', source: 'Legacy', value: 997, score: '2 Low', angle: ANGLES[0], verified: true, emailed: false },
  { id: 2, name: 'Charlotte Property Management', phone: '941-555-4343', city: 'Port Charlotte', niche: 'Property Managers', stage: 'New', priority: 'Medium', package: 'Standard', source: 'Legacy', value: 997, score: '2 Low', angle: ANGLES[1], verified: true, emailed: false },
  { id: 3, name: 'Bayside Blooms Florist', phone: '941-555-5353', city: 'Punta Gorda', niche: 'Florist', stage: 'New', priority: 'Low', package: 'Standard', source: 'Legacy', value: 797, score: '2 Low', angle: ANGLES[2], verified: false, emailed: false },
  { id: 4, name: 'Coastal Pest Solutions', phone: '239-555-0202', city: 'Fort Myers', niche: 'Pest Control', stage: 'New', priority: 'High', package: 'Standard', source: 'Legacy', value: 1297, score: '2 Low', angle: ANGLES[3], verified: true, emailed: true },
  { id: 5, name: 'Precision Auto Works', phone: '239-555-0707', city: 'Fort Myers', niche: 'Auto Repair', stage: 'Contacted', priority: 'High', package: 'Standard', source: 'Legacy', value: 997, score: '2 Low', angle: ANGLES[4], verified: true, emailed: true },
  { id: 6, name: 'Elite Auto Service', phone: '239-555-1010', city: 'Fort Myers', niche: 'Auto Repair', stage: 'New', priority: 'Medium', package: 'Standard', source: 'Legacy', value: 997, score: '2 Low', angle: ANGLES[5], verified: true, emailed: false },
  { id: 7, name: 'Prime Auto Tech', phone: '239-555-1313', city: 'Fort Myers', niche: 'Auto Repair', stage: 'Proposal', priority: 'High', package: 'Pro', source: 'Google', value: 1997, score: '4 High', angle: ANGLES[6], verified: true, emailed: true },
  { id: 8, name: 'Metro Auto Service', phone: '239-555-1919', city: 'Naples', niche: 'Auto Repair', stage: 'New', priority: 'Medium', package: 'Standard', source: 'Legacy', value: 997, score: '2 Low', angle: ANGLES[7], verified: false, emailed: false },
  { id: 9, name: 'Southwest HVAC Pros', phone: '239-555-2020', city: 'Fort Myers', niche: 'HVAC', stage: 'Qualified', priority: 'High', package: 'Pro', source: 'Google', value: 1997, score: '4 High', angle: ANGLES[8], verified: true, emailed: true },
  { id: 10, name: 'Gulf Coast Plumbing', phone: '239-555-3030', city: 'Naples', niche: 'Plumbing', stage: 'New', priority: 'Medium', package: 'Standard', source: 'Legacy', value: 997, score: '3 Med', angle: ANGLES[9], verified: true, emailed: false },
  { id: 11, name: 'Sarasota Realty Partners', phone: '941-555-4040', city: 'Sarasota', niche: 'Real Estate Agents', stage: 'Proposal', priority: 'High', package: 'Enterprise', source: 'Google', value: 3997, score: '5 High', angle: ANGLES[10], verified: true, emailed: true },
  { id: 12, name: 'Cape Coral Pest Control', phone: '239-555-5050', city: 'Cape Coral', niche: 'Pest Control', stage: 'Closed', priority: 'High', package: 'Pro', source: 'Google', value: 1997, score: '4 High', angle: ANGLES[11], verified: true, emailed: true },
  { id: 13, name: 'Naples Property Group', phone: '239-555-6060', city: 'Naples', niche: 'Property Managers', stage: 'New', priority: 'Low', package: 'Standard', source: 'Legacy', value: 797, score: '1 Low', angle: ANGLES[0], verified: false, emailed: false },
  { id: 14, name: 'Suncoast Auto Clinic', phone: '941-555-7070', city: 'Sarasota', niche: 'Auto Repair', stage: 'Contacted', priority: 'Medium', package: 'Standard', source: 'Legacy', value: 997, score: '3 Med', angle: ANGLES[4], verified: true, emailed: true },
  { id: 15, name: 'Charlotte Florist Studio', phone: '941-555-8080', city: 'Port Charlotte', niche: 'Florist', stage: 'New', priority: 'Low', package: 'Standard', source: 'Legacy', value: 797, score: '2 Low', angle: ANGLES[2], verified: false, emailed: false },
];

export const STAGES = ['New', 'Contacted', 'Qualified', 'Proposal', 'Closed', 'Lost'];
export const NICHES = ['Auto Repair', 'Real Estate Agents', 'Property Managers', 'Pest Control', 'Florist', 'HVAC', 'Plumbing'];
export const CITIES = ['Fort Myers', 'Naples', 'Port Charlotte', 'Punta Gorda', 'Sarasota', 'Cape Coral'];
export const PACKAGES = ['Standard', 'Pro', 'Enterprise'];
export const SOURCES = ['Legacy', 'Google', 'Referral', 'Manual'];
export const SCORES = ['5 High', '4 High', '3 Med', '2 Low', '1 Low'];
