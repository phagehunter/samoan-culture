/**
 * Guide-text name → network-node id.
 * Longest names must come first so "Samoa mo Samoa" wins over "Samoa",
 * and "John Williams" over any stray "Williams". Powers the interactive
 * names in the section guides.
 */
export const NAME_TO_ID: Record<string, string> = {
  'Samoan Community Development Center': 'scdc',
  'Community Development Center': 'scdc',
  'Ilana Gershon': 'gershon',
  'Samoa mo Samoa': 'samoa_mo_samoa',
  'John Williams': 'john_williams',
  'community day school': 'day_school',
  'day school': 'day_school',
  'Thomas & Sina': 'thomas_sina',
  'Janet & Sione': 'janet_sione',
  'granting agencies': 'funders',
  'granting agency': 'funders',
  Gershon: 'gershon',
  'CYPF Act': 'cyf',
  Williams: 'john_williams',
  faifeau: 'faifeau',
  Alofa: 'alofa',
  Angela: 'angela',
  Michael: 'michael',
  matai: 'matai',
  NOSA: 'nosa',
  CAPAA: 'capaa',
  CYF: 'cyf',
  DHS: 'dhs',
  EFKS: 'efks',
  Lupe: 'lupe',
  Sara: 'sara',
  Lotu: 'lotu',
  Rita: 'rita',
  Ben: 'ben',
  Tim: 'tim',
};

/**
 * Alternation regex, longest names first, with word boundaries so short
 * names ("Ben", "Tim") never match inside longer words.
 */
export const NAME_REGEX = new RegExp(
  `\\b(${Object.keys(NAME_TO_ID)
    .sort((a, b) => b.length - a.length)
    .map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})\\b`,
);
