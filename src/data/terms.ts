/**
 * Key-term network: the working vocabulary of No Family Is an Island —
 * Gershon's analytic concepts plus the Samoan and bureaucratic terms the
 * exam turns on — linked by the conceptual relations the book itself draws.
 * This view is the study glossary; the section slider does not filter it.
 */

export type TermDomain =
  | 'concept' // Gershon's core analytic vocabulary
  | 'exchange' // the fa'alavelave ritual-exchange system
  | 'social' // Samoan social categories & values
  | 'church' // religion, conversion & moral economies
  | 'context'; // history, politics, diaspora & bureaucracy

export const DOMAIN_COLORS: Record<TermDomain, string> = {
  concept: '#a78bfa', // violet
  exchange: '#ea8a4c', // fine-mat orange
  social: '#2dd4bf', // teal
  church: '#e879f9', // fuchsia
  context: '#38bdf8', // sky
};

export const DOMAIN_LABELS: Record<TermDomain, string> = {
  concept: 'Gershon’s concepts',
  exchange: 'Ritual exchange',
  social: 'Samoan society',
  church: 'Church & conversion',
  context: 'History & bureaucracy',
};

export interface Term {
  id: string;
  term: string;
  lang: 'Samoan' | 'English' | 'Anthro. theory' | 'Acronym';
  domain: TermDomain;
  /** true = flagged KEY / *** / "on the exam" in the lecture notes. */
  exam?: boolean;
  gloss: string;
  note?: string;
}

export interface TermLink {
  source: string;
  target: string;
  relation: string;
  note?: string;
}

export const TERMS: Term[] = [
  // ——————————————— Gershon's core concepts ———————————————
  { id: 'cultural', term: 'cultural', lang: 'English', domain: 'concept', exam: true,
    gloss: 'What migrants frame as traditional and locatable — authentic, tied to Samoa (e.g. ritual exchange).',
    note: 'On the exam. Cultural = traditional & locatable. Always defined against its silent opposite, the acultural.' },
  { id: 'acultural', term: 'acultural', lang: 'English', domain: 'concept', exam: true,
    gloss: 'What migrants frame as modern and universal — bureaucracies, laws, capitalism, technology.',
    note: 'On the exam. Acultural = modern & universal. Not a real anthropological category — for anthropologists ALL life is cultural. It is a folk classification the book studies. "The acultural haunts the cultural."' },
  { id: 'reflexivity', term: 'reflexivity', lang: 'English', domain: 'concept', exam: true,
    gloss: 'A person’s own social analysis of a context — knowing your role in an interaction and the possibilities it allows.',
    note: '*** Firm understanding needed for the exam. NOT the usual anthropological sense (the fieldworker examining their own bias); Gershon means the interlocutor’s reflexive engagement with their situation. Different social orders demand different reflexivities.' },
  { id: 'clash_reflexivities', term: 'clash of reflexivities', lang: 'English', domain: 'concept', exam: true,
    gloss: 'A miscommunication that arises when two people bring the reflexive stance of two different social orders to the same encounter.',
    note: '*** The engine of Chapter 3. Ben (bureaucratic reflexivity) vs. Alofa (Samoan-chiefly reflexivity): the same words mean different things because each reads the context by a different social order.' },
  { id: 'cultural_broker', term: 'cultural broker (culture-bearer)', lang: 'English', domain: 'concept', exam: true,
    gloss: 'Someone who represents and speaks on behalf of a culture, judging what is "Samoan enough" and translating culture into a system.',
    note: '*** Alofa is the cultural broker. She carries a responsibility to the Samoan community — voicing their needs from a cultural perspective — and expects others to behave as a matai would.' },
  { id: 'systems_carrier', term: 'systems carrier (systems-bearer)', lang: 'English', domain: 'concept', exam: true,
    gloss: 'Someone who represents and enforces a bureaucratic system — its rules, limits, and procedures.',
    note: '*** Ben is the systems carrier. He speaks for the school/bureaucracy and its constraints, not for Samoan culture — which is why his flat refusal offended Alofa.' },
  { id: 'culture_not_system', term: 'culture is not a system', lang: 'English', domain: 'concept', exam: true,
    gloss: 'Gershon’s Chapter 3 claim: Samoan culture does not operate like a bureaucratic system, so forcing a Samoan to act as a broker "translating" between the two distorts both.',
    note: 'The price is paid when a US agency requires a Samoan to translate between systems and culture in a way that is inappropriate from a Samoan perspective.' },
  { id: 'social_order', term: 'social order', lang: 'English', domain: 'concept', exam: true,
    gloss: 'An organized way of relating — with its own hierarchies, expected behaviours, and reflexive demands (Samoan culture, a bureaucracy, a church).',
    note: 'Migrants navigate MULTIPLE social orders at once, "jostling for relevance." The relationship between reflexivity and social orders is dialogic.' },
  { id: 'moral_order', term: 'moral order', lang: 'English', domain: 'concept',
    gloss: 'A set of moral assumptions a group lives by.',
    note: 'Chapter 2: converts are NOT switching moral orders — they change how they relate to the moral order they’re in.' },
  { id: 'moral_economy', term: 'moral economy', lang: 'Anthro. theory', domain: 'concept', exam: true,
    gloss: 'Not just the moral assumptions behind economic practice, but the reflexive stance one must adopt to act within a moral order.',
    note: 'Title concept of Chapter 2. Conversion = moving between moral economies (reflexive stances), not between doctrines.' },
  { id: 'strategic_ignorance', term: 'strategic ignorance (not-knowing)', lang: 'English', domain: 'concept', exam: true,
    gloss: 'Deliberately not knowing — and not revealing — how much others actually have, so the two exchange systems stay separate.',
    note: 'The namesake of Chapter 1. Mutual and productive: the elicitor ignores your capitalist limits; the elicitee hides resources to keep room to refuse. Intensified by migration.' },
  { id: 'spheres_exchange', term: 'spheres of exchange', lang: 'Anthro. theory', domain: 'concept',
    gloss: 'Classic idea (Bohannan) that distinct exchange domains are kept apart by the objects allowed to move through them.',
    note: 'Gershon’s foil: she argues it is the circulation of KNOWLEDGE, not objects, that separates Samoan from capitalist exchange.' },
  { id: 'sociocentric', term: 'sociocentric personhood', lang: 'Anthro. theory', domain: 'concept',
    gloss: 'A self located in social context and others’ gazes rather than in private intention (Bradd Shore).',
    note: '"A misdeed is not a misdeed until publicly known." Conversion shifts converts toward a continuous, self-monitoring self instead.' },
  { id: 'cultural_expertise', term: 'cultural expertise', lang: 'English', domain: 'concept',
    gloss: 'The skill migrants develop in representing "Samoan culture" strategically to states and funders.',
    note: 'The book’s subtitle. Honed since colonial indirect rule, when leaders learned to represent Samoan custom to gain resources.' },
  { id: 'legislating_culture', term: 'legislating culture', lang: 'English', domain: 'concept', exam: true,
    gloss: 'When governments write law that presumes families work like small bureaucratic systems, forcing cultural practice into legal categories.',
    note: 'Chapters 4–5. "It’s a hard, hard thing to legislate cultures" — the central problem of living in the diaspora.' },

  // ——————————————— Ritual exchange ———————————————
  { id: 'faalavelave', term: 'fa’alavelave', lang: 'Samoan', domain: 'exchange', exam: true,
    gloss: 'Samoan ritual exchanges — weddings, funerals, title bestowals, birthdays — that pool and redistribute family resources.',
    note: 'The core "cultural" practice. Foregrounds a family’s loyalty and unity to Samoa; often stands in for fa’asamoa (Samoan culture) as a whole. Families continue it even when they can’t afford it.' },
  { id: 'sii', term: 'si’i (si’i alofa)', lang: 'Samoan', domain: 'exchange', exam: true,
    gloss: 'The specific presentation — a "gift of love" — one side brings to a fa’alavelave (mats, food, money).',
    note: 'Fa’alavelave is the broad ritual; the si’i is the concrete event of gathering and contributing. Visiting family present the fine mats to the host family.' },
  { id: 'ie_toga', term: '‘ie toga (fine mats)', lang: 'Samoan', domain: 'exchange', exam: true,
    gloss: 'Finely woven mats that carry only exchange-value; the signature gift of the bride’s side.',
    note: 'They represent the "wealth" of the island. Their pure exchange-value vs. the groom’s side’s use-value goods (food, cloth, cash) is the axis of complementary exchange.' },
  { id: 'indirect_ex', term: 'indirect exchange', lang: 'Anthro. theory', domain: 'exchange',
    gloss: 'Every family gives to the SAME recipient (e.g. a church), competing to look the most generous (Bradd Shore).',
    note: 'Generates ranking through apparent equivalence — LMS-tradition churches read each donor’s name and amount aloud.' },
  { id: 'complementary_ex', term: 'complementary (direct) exchange', lang: 'Anthro. theory', domain: 'exchange',
    gloss: 'Two sides exchange fundamentally UNLIKE objects — fine mats for food and cash (Bradd Shore).',
    note: 'Creates equivalences that did not exist before; the wedding/funeral model.' },
  { id: 'elicitor', term: 'elicitor / elicitee', lang: 'English', domain: 'exchange',
    gloss: 'Elicitor = the senior relative asking for contributions; elicitee = the younger relative (roughly 18–45) asked to give.',
    note: 'The master relationship of Chapter 1; each side cultivates a mirror-image ignorance of the other.' },
  { id: 'remittance', term: 'remittance economy', lang: 'English', domain: 'exchange', exam: true,
    gloss: 'Migrants work in the distant land and send money "home" to fund family and village obligations.',
    note: 'The engine forcing capitalist cash into Samoan ritual — and a stated reason for migrating. A very family-centric practice, sustained across generations.' },

  // ——————————————— Samoan society ———————————————
  { id: 'aiga', term: 'aiga', lang: 'Samoan', domain: 'social', exam: true,
    gloss: 'The extended Samoan family — the unit that pools resources for fa’alavelave.',
    note: 'The book’s title, "No Family Is an Island," turns on the aiga: no family stands alone. A child’s T-shirt: "I love my aiga, but I hate fa’alavelave."' },
  { id: 'matai', term: 'matai', lang: 'Samoan', domain: 'social', exam: true,
    gloss: 'A chief — the titled head of a family branch who directs how resources move.',
    note: 'The role Alofa expects Ben to play: a matai would say "I’ll do whatever I can," never flatly refuse. In Samoa a matai could "count the pigs" to know what a family could give; money made wealth hideable.' },
  { id: 'tulafale', term: 'tulāfale (orator/talking chief)', lang: 'Samoan', domain: 'social',
    gloss: 'A talking chief who speaks at ceremonies and receives gifts of gratitude for attending.',
    note: 'Orators who crash unrelated funerals "to get something" are the paradigm of immoral system-merging.' },
  { id: 'fa_samoa', term: 'fa’asamoa', lang: 'Samoan', domain: 'social', exam: true,
    gloss: '"The Samoan way" — Samoan culture broadly, but often used to mean the ritual-exchange system specifically.',
    note: 'The slippage from culture-in-general to fa’alavelave shows how, for migrants, exchanging IS being cultural.' },
  { id: 'afakasi', term: 'afakasi', lang: 'Samoan', domain: 'social', exam: true,
    gloss: 'A person of mixed (part-Samoan) parentage — literally "half-caste."',
    note: 'Being afakasi shapes one’s sense of what is cultural vs. acultural. Many second-wave migrants and church converts were afakasi or raised abroad.' },
  { id: 'alofa', term: 'alofa', lang: 'Samoan', domain: 'social', exam: true,
    gloss: 'Respectful love — for family and for God.',
    note: 'The motive people claim for THEIR OWN giving, as opposed to the "pride" they attribute to others.' },
  { id: 'pride_shame', term: 'pride & shame', lang: 'English', domain: 'social',
    gloss: 'The paired motives Samoans attribute to OTHERS’ participation in fa’alavelave.',
    note: 'Sara’s lesson to Gershon. Names the sociocentric moral engine that converts step away from. Generosity determines social standing.' },
  { id: 'social_status', term: 'social status / markers', lang: 'English', domain: 'social',
    gloss: 'One’s standing, made visible and amplified in a small, isolated, shared-ethnicity society.',
    note: 'Lecture: "if you’re chief, you’re chief all the time." Generosity determines social standing in Samoan culture.' },

  // ——————————————— Church & conversion ———————————————
  { id: 'conversion', term: 'conversion', lang: 'English', domain: 'church', exam: true,
    gloss: 'Here: moving from one FORM of Christianity to another — not from non-Christian to Christian.',
    note: 'Chapter 2. Converts change a reflexive stance / personhood, not a doctrine; some attend a mainline church in the morning and an evangelical one in the afternoon.' },
  { id: 'meaningful', term: 'meaningful vs. meaningless worship', lang: 'English', domain: 'church',
    gloss: 'The emic terms converts use: mainline Samoan worship felt "meaningless," evangelical worship "meaningful."',
    note: 'Gershon’s translation: "meaning" = feeling connected to a moral order. Calling worship meaningless lets converts reframe cultural exchange as empty too.' },
  { id: 'efks', term: 'EFKS (Congregational)', lang: 'Acronym', domain: 'church',
    gloss: 'Ekalesia Fa’apotopotoga Kerisiano o Samoa — the Congregational Church descended from the London Missionary Society.',
    note: 'The paradigmatic "too cultural," high-demand mainline church that converts leave; famous for reading donations aloud.' },
  { id: 'lms', term: 'London Missionary Society (LMS)', lang: 'English', domain: 'church',
    gloss: 'John Williams brought Christianity to Samoa in 1830; source of the Congregational/EFKS tradition.',
    note: 'Historical root of the mainline churches and their public competitive-giving practices.' },
  { id: 'faifeau', term: 'faifeau', lang: 'Samoan', domain: 'church',
    gloss: 'A church minister/pastor.',
    note: 'The "love offering for the faifeau" is the model of public competitive giving that converts reject.' },
  { id: 'being_achieving', term: 'exhibited vs. emoted faith', lang: 'English', domain: 'church',
    gloss: 'Mainline = "being" worshipful without showing effort; evangelical = "achieving," revealing the labour of faith.',
    note: 'The crisp formula for the moral-style difference; a move from a context-dependent self to a continuous, self-monitoring self.' },

  // ——————————————— History, politics & bureaucracy ———————————————
  { id: 'diaspora', term: 'diaspora', lang: 'English', domain: 'context', exam: true,
    gloss: 'A population scattered from its geographic place of origin that still identifies with it.',
    note: '*** Know the denotation for the exam. Greek: dia = "across/apart" + spora = "seed" → a scattering (originally of the Jews). Involves dispersal, not just migration. The book studies the consequences of LIVING in diaspora.' },
  { id: 'no_family_island', term: '"No Family Is an Island"', lang: 'English', domain: 'context',
    gloss: 'The title, echoing John Donne’s "no man is an island" — no Samoan family stands alone; all are bound in webs of exchange.',
    note: 'Donne’s Meditation XVII: "never send to know for whom the bell tolls; it tolls for thee." Gershon’s pun: families are islanders, yet no family IS an island.' },
  { id: 'indirect_rule', term: 'indirect rule', lang: 'English', domain: 'context', exam: true,
    gloss: 'Colonial governance through local leaders, letting Samoan chiefs choose how to represent Samoan custom to gain resources.',
    note: 'Where "cultural expertise" was born. A tension ran between a centralizing colonial bureaucracy and a decentralized Samoan order of village chief-collectives.' },
  { id: 'neoliberalism', term: 'neoliberalism', lang: 'English', domain: 'context', exam: true,
    gloss: 'Policy shift (from the 1980s) toward decentralizing and privatizing government services, pushing labour back onto families.',
    note: 'US "Reaganomics" and NZ "Rogernomics." By the mid-1990s laws required families to do work the state once did (see Chs. 4–5).' },
  { id: 'capaa', term: 'CAPAA', lang: 'Acronym', domain: 'context', exam: true,
    gloss: 'Commission on Asian Pacific American Affairs — a Washington State ethnic commission that channels community stories to legislators.',
    note: 'Born of 1971 activism over discrimination and access. Governor-appointed (not elected); only WA and California sustained such commissions. Meant to head off Ben/Alofa-type breakdowns.' },
  { id: 'nosa', term: 'NOSA / Samoa mo Samoa', lang: 'English', domain: 'context',
    gloss: 'Samoan community organizations (National Office of Samoan Affairs; the now-defunct Samoa mo Samoa) that write grants and broker services.',
    note: 'Their forty years of grant-writing taught the book’s core lesson: in the US you fund Samoans as an at-risk minority (race & class), not as a culture.' },
  { id: 'race_class', term: 'race & class, not culture', lang: 'English', domain: 'context', exam: true,
    gloss: 'The US funding lesson: to win grants, present Samoans as an at-risk minority (poverty, low test scores), not as a culture to preserve.',
    note: 'Sharp NZ contrast: NZ (a settler-colonial state) funds cultural preservation; the US (with its racial history) funds groups "at risk." Grievances must be framed as race/ethnicity to move the state.' },
];

export const TERM_BY_ID: Record<string, Term> = Object.fromEntries(TERMS.map((t) => [t.id, t]));

export const TERM_LINKS: TermLink[] = [
  // The cultural/acultural axis anchors everything
  { source: 'cultural', target: 'acultural', relation: 'opposes', note: 'Each is defined against the other; the acultural haunts the cultural.' },
  { source: 'cultural', target: 'faalavelave', relation: 'exemplified by', note: 'Ritual exchange is the prototype "cultural" practice.' },
  { source: 'acultural', target: 'neoliberalism', relation: 'exemplified by', note: 'Capitalism/bureaucracy read as modern & universal.' },
  { source: 'cultural', target: 'fa_samoa', relation: 'equated with', note: 'Being cultural = doing things the Samoan way.' },
  { source: 'acultural', target: 'conversion', relation: 'complicated by', note: 'The acultural evangelical church is felt to be MORE moral.' },

  // Reflexivity cluster — Chapter 3 core
  { source: 'reflexivity', target: 'social_order', relation: 'dialogic with', note: 'Reflexivity and social orders shape each other.' },
  { source: 'reflexivity', target: 'clash_reflexivities', relation: 'produces', note: 'Two reflexivities meeting produces the clash.' },
  { source: 'clash_reflexivities', target: 'cultural_broker', relation: 'embodied by', note: 'Alofa’s side of the clash.' },
  { source: 'clash_reflexivities', target: 'systems_carrier', relation: 'embodied by', note: 'Ben’s side of the clash.' },
  { source: 'cultural_broker', target: 'systems_carrier', relation: 'clashes with', note: 'Alofa (culture) vs. Ben (system).' },
  { source: 'cultural_broker', target: 'matai', relation: 'expects', note: 'Alofa expects Ben to behave like a matai.' },
  { source: 'culture_not_system', target: 'systems_carrier', relation: 'diagnoses', note: 'Forcing culture through a system distorts it.' },
  { source: 'culture_not_system', target: 'cultural_broker', relation: 'burdens', note: 'The broker pays the price of translating.' },
  { source: 'social_order', target: 'moral_order', relation: 'kin' },
  { source: 'reflexivity', target: 'cultural', relation: 'classifies', note: 'People reflexively label contexts cultural or acultural.' },

  // Exchange cluster — Chapter 1
  { source: 'faalavelave', target: 'sii', relation: 'enacted as', note: 'The si’i is the concrete presentation within the ritual.' },
  { source: 'sii', target: 'ie_toga', relation: 'presents', note: 'Fine mats are the bride’s side’s gift.' },
  { source: 'faalavelave', target: 'aiga', relation: 'performs unity of', note: 'Public display of family strength and unity.' },
  { source: 'faalavelave', target: 'strategic_ignorance', relation: 'runs on', note: 'Not-knowing keeps ritual and capitalist money apart.' },
  { source: 'strategic_ignorance', target: 'elicitor', relation: 'practiced by', note: 'Both elicitor and elicitee cultivate ignorance.' },
  { source: 'strategic_ignorance', target: 'spheres_exchange', relation: 'revises', note: 'Knowledge, not objects, separates the spheres.' },
  { source: 'ie_toga', target: 'complementary_ex', relation: 'axis of', note: 'Mats (exchange-value) ↔ food/cash (use-value).' },
  { source: 'faalavelave', target: 'indirect_ex', relation: 'includes', note: 'Church giving is competitive indirect exchange.' },
  { source: 'indirect_ex', target: 'complementary_ex', relation: 'contrasts with', note: 'Shore’s two exchange types.' },
  { source: 'faalavelave', target: 'remittance', relation: 'funded by', note: 'Migrant remittances feed the ritual system.' },
  { source: 'remittance', target: 'diaspora', relation: 'defines life in' },
  { source: 'matai', target: 'faalavelave', relation: 'directs' },
  { source: 'tulafale', target: 'faalavelave', relation: 'speaks at' },

  // Society & values
  { source: 'aiga', target: 'matai', relation: 'led by' },
  { source: 'faalavelave', target: 'pride_shame', relation: 'motivated (in others) by', note: 'Pride/shame attributed to others.' },
  { source: 'faalavelave', target: 'alofa', relation: 'motivated (in self) by', note: 'Alofa claimed for one’s own giving.' },
  { source: 'pride_shame', target: 'social_status', relation: 'confers', note: 'Generosity determines standing.' },
  { source: 'pride_shame', target: 'sociocentric', relation: 'grounded in', note: 'Morality lives in others’ gazes.' },
  { source: 'afakasi', target: 'cultural', relation: 'shapes sense of', note: 'Mixed parentage shifts the cultural/acultural line.' },

  // Church & conversion — Chapter 2
  { source: 'conversion', target: 'moral_economy', relation: 'moves between', note: 'Not doctrines but reflexive stances.' },
  { source: 'conversion', target: 'moral_order', relation: 'does NOT switch', note: 'Converts change relation to, not membership of, a moral order.' },
  { source: 'moral_economy', target: 'reflexivity', relation: 'requires a stance of' },
  { source: 'conversion', target: 'meaningful', relation: 'framed as', note: 'Leaving "meaningless" worship for "meaningful."' },
  { source: 'conversion', target: 'being_achieving', relation: 'shifts from', note: 'From exhibited to emoted faith.' },
  { source: 'being_achieving', target: 'sociocentric', relation: 'moves away from', note: 'Toward a continuous self-monitoring self.' },
  { source: 'efks', target: 'lms', relation: 'descends from' },
  { source: 'efks', target: 'faifeau', relation: 'led by' },
  { source: 'efks', target: 'indirect_ex', relation: 'practises', note: 'Reads donations aloud — competitive giving.' },
  { source: 'conversion', target: 'ie_toga', relation: 'refuses', note: 'Mormon/SDA converts stop exchanging fine mats.' },
  { source: 'faifeau', target: 'pride_shame', relation: 'stages' },

  // History, politics & bureaucracy
  { source: 'diaspora', target: 'no_family_island', relation: 'named by' },
  { source: 'cultural_expertise', target: 'indirect_rule', relation: 'born under', note: 'Chiefs learned to represent custom to colonizers.' },
  { source: 'cultural_expertise', target: 'cultural_broker', relation: 'exercised by' },
  { source: 'race_class', target: 'nosa', relation: 'learned by', note: 'Forty years of grant-writing taught the lesson.' },
  { source: 'race_class', target: 'acultural', relation: 'reframes as', note: 'US funds risk (race/class), not culture.' },
  { source: 'neoliberalism', target: 'legislating_culture', relation: 'drives', note: 'Privatization pushes labour onto families.' },
  { source: 'legislating_culture', target: 'culture_not_system', relation: 'runs into', note: 'Law presumes families are little systems.' },
  { source: 'capaa', target: 'cultural_broker', relation: 'institutionalizes', note: 'A formal channel for community brokering.' },
  { source: 'capaa', target: 'systems_carrier', relation: 'mediates', note: 'Built to head off Ben/Alofa breakdowns.' },
  { source: 'nosa', target: 'cultural_broker', relation: 'staffed by' },
  { source: 'indirect_rule', target: 'matai', relation: 'empowered', note: 'Let some chiefs claim sole authority over custom.' },
];
