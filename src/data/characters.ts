import type { Character } from '../types';

/**
 * "Cast" catalogue for Ilana Gershon's No Family Is an Island: Cultural
 * Expertise among Samoans in Diaspora (Cornell UP, 2012).
 *
 * Gershon's ethnography is about people moving between social orders, so the
 * network mixes individuals, families, churches, community organizations, and
 * government bureaucracies. Personal names of interlocutors are Gershon's own
 * (mostly pseudonyms). "Collective" marks an aggregate node (a family, a
 * congregation); "Institution" marks an organization or agency.
 */
export const CHARACTERS: Character[] = [
  // ——— The fieldwork frame ———
  { id: 'gershon', name: 'Ilana Gershon', type: 'Person', alignment: 'Fieldwork', group_size: 1,
    epithets: ['the anthropologist & narrator', 'fieldwork in NZ & the US, 1996–1998'],
    note: 'A Jewish outsider to both Samoan culture and the churches — which is why interlocutors confided their ambivalence to her. She uses "reflexivity" in the linguistic-anthropological sense, not the usual autobiographical one.' },

  // ——— Samoan families, chiefs & the exchange system ———
  { id: 'aiga', name: 'The aiga (extended family)', type: 'Collective', alignment: 'Family', group_size: 500,
    epithets: ['the extended Samoan family', 'the unit that pools resources'],
    note: 'The book’s title turns on the aiga: "No Family Is an Island." A child’s T-shirt: "I love my aiga, but I hate fa’alavelave."' },
  { id: 'matai', name: 'Matai (chiefs)', type: 'Collective', alignment: 'Matai', group_size: 20,
    epithets: ['titled family heads', 'ali’i (high chief) & tulāfale (talking chief)'],
    note: 'The ali’i decides and embodies unity; the tulāfale speaks and makes genealogical connections visible. In diaspora no one can legitimately claim to be the chief "of San Francisco."' },
  { id: 'tulafale', name: 'Tulāfale (orators)', type: 'Collective', alignment: 'Matai', group_size: 8,
    epithets: ['talking chiefs / orators', 'receive gifts for attending ceremonies'],
    note: 'Orators who crash unrelated funerals "to get something" are the book’s image of immoral system-merging.' },
  { id: 'bride_side', name: 'Bride’s side', type: 'Collective', alignment: 'Family', group_size: 40,
    epithets: ['gives the fine mats (‘ie toga)', 'pure exchange-value'] },
  { id: 'groom_side', name: 'Groom’s side', type: 'Collective', alignment: 'Family', group_size: 40,
    epithets: ['gives food, cloth & cash', 'use-value goods'] },
  { id: 'rita', name: 'Rita', type: 'Person', alignment: 'Family', group_size: 1,
    epithets: ['NZ mother in her late 20s', 'all three children removed by CYF'],
    note: 'As eldest sibling in NZ with no older relatives, she carried the whole parental load alone. Judged "not a bad mother, just unsophisticated" — she "acted like her children’s older sister, not their mother."' },
  { id: 'rita_sister', name: 'Rita’s younger sister', type: 'Person', alignment: 'Family', group_size: 1,
    epithets: ['breached Samoan hierarchy'],
    note: 'Arranged the children’s visit directly with the CYF worker — showing information did not circulate the way the state assumed.' },

  // ——— Churches & conversion ———
  { id: 'efks', name: 'EFKS (Congregational)', type: 'Institution', alignment: 'Church', group_size: 200,
    epithets: ['the Congregational Church', 'descended from the LMS'],
    note: 'The paradigmatic "too cultural," high-demand mainline church; reads each donor’s name and amount aloud.' },
  { id: 'evangelical', name: 'Evangelical / Pentecostal church', type: 'Institution', alignment: 'Church', group_size: 120,
    epithets: ['meets in a West Auckland gym', 'anonymous giving, emotive worship'],
    note: 'The destination of conversion: a "muscular Christianity" of mirrors and mats, mostly NZ-raised Samoans, young families.' },
  { id: 'faifeau', name: 'Faifeau (minister)', type: 'Person', alignment: 'Church', group_size: 1,
    epithets: ['a church minister/pastor'],
    note: 'The "love offering for the faifeau," read aloud, is the model of public competitive giving that converts reject.' },
  { id: 'sara', name: 'Sara', type: 'Person', alignment: 'Church', group_size: 1,
    epithets: ['a key informant', 'mother of Lotu'],
    note: 'Taught Gershon two weighty words — "power" and "pride." Pride (and its partner shame) is what Samoans attribute to OTHERS’ giving; alofa is what they claim for their own.' },
  { id: 'lotu', name: 'Lotu', type: 'Person', alignment: 'Church', group_size: 1,
    epithets: ['Sara’s daughter, Seventh-Day Adventist', 'married into a Tongan family'] },
  { id: 'thomas_sina', name: 'Thomas & Sina', type: 'Collective', alignment: 'Church', group_size: 2,
    epithets: ['a Mormon mixed-marriage couple'],
    note: 'Church rules against exchanging fine mats let them refocus resources on the nuclear family.' },
  { id: 'janet_sione', name: 'Janet & Sione', type: 'Collective', alignment: 'Church', group_size: 2,
    epithets: ['a convert couple'],
    note: 'Sione contrasts deep, internalized "European" faith with Sunday-only Samoan worship — "meaningful" vs. "meaningless."' },
  { id: 'john_williams', name: 'John Williams (LMS)', type: 'Person', alignment: 'Church', group_size: 1,
    epithets: ['London Missionary Society', 'brought Christianity to Samoa, 1830'],
    note: 'Historical root of the Congregational (EFKS) tradition and its public competitive-giving practices.' },

  // ——— Community organizations & cultural brokers ———
  { id: 'alofa', name: 'Alofa', type: 'Person', alignment: 'Broker', group_size: 1,
    epithets: ['head of NOSA’s San Francisco branch', 'the cultural broker / culture-bearer'],
    note: 'Runs the day-school classroom and is juvenile-probation case manager for several students. Married to a Louisiana man of African & Native American descent; attends a non-Samoan church — so the Ben clash is NOT a culture clash. Her line: "No matai would ever do anything like that."' },
  { id: 'nosa', name: 'NOSA', type: 'Institution', alignment: 'Broker', group_size: 1,
    epithets: ['National Office of Samoan Affairs', 'est. 1976; SF branch'],
    note: 'Housed a community day school for Samoan high-schoolers near dropping out. Evicted in 1998 for late rent — the trigger for the Ben/Alofa scene.' },
  { id: 'samoa_mo_samoa', name: 'Samoa mo Samoa', type: 'Institution', alignment: 'Broker', group_size: 1,
    epithets: ['now-defunct SF Samoan organization', '22 grant proposals, 1979–1995'],
    note: 'Its forty years of trial-and-error grant-writing taught the book’s core US lesson: fund Samoans as an at-risk minority (race & class), not as a culture.' },
  { id: 'scdc', name: 'Samoan Community Dev. Center', type: 'Institution', alignment: 'Broker', group_size: 1,
    epithets: ['a rival SF Samoan organization', 'director: Michael'] },
  { id: 'michael', name: 'Michael', type: 'Person', alignment: 'Broker', group_size: 1,
    epithets: ['director of the Samoan Community Development Center'],
    note: 'Tired of all the culture talk, he just wants "competent families" — a Samoan worker strategically REJECTING cultural framing.' },
  { id: 'lupe', name: 'Lupe', type: 'Person', alignment: 'Broker', group_size: 1,
    epithets: ['counselor at a NZ Samoan nonprofit', 'Rita’s case'],
    note: 'Works to "raise the family to the level of the Act" — and negotiated Christmas plans with everyone except Rita herself.' },
  { id: 'capaa', name: 'CAPAA', type: 'Institution', alignment: 'Broker', group_size: 12,
    epithets: ['Commission on Asian Pacific American Affairs', 'Washington State (lecture context)'],
    note: 'A governor-appointed ethnic commission (only WA & California sustained one) that channels community stories to legislators — built to head off Ben/Alofa-type breakdowns.' },

  // ——— Government bureaucracies & their carriers ———
  { id: 'ben', name: 'Ben', type: 'Person', alignment: 'Bureaucracy', group_size: 1,
    epithets: ['principal over the satellite day schools', 'the systems carrier'],
    note: 'Not Samoan — immigrated from the Philippines as a child. Controls the day school’s resources. When Alofa asked for an empty district building, he said no, pleading he was "caught in the system" — the plea for empathy that offended her.' },
  { id: 'tim', name: 'Tim', type: 'Person', alignment: 'Bureaucracy', group_size: 1,
    epithets: ['SF Department of Human Services rep'],
    note: 'Proposed "governmentally engineered extended families" for welfare-to-work. Asked about culturally sensitive placement, he said "no, absolutely not" — race-blind criteria only. Gershon asked about culture; he answered with race.' },
  { id: 'angela', name: 'Angela', type: 'Person', alignment: 'Bureaucracy', group_size: 1,
    epithets: ['Juvenile Probation trainer'],
    note: 'Taught case managers to treat families "as systems" — equal, transparent circulation of information. Baffled when Gershon and Alofa objected that Samoan families don’t work that way.' },
  { id: 'dhs', name: 'Dept. of Human Services', type: 'Institution', alignment: 'Bureaucracy', group_size: 1,
    epithets: ['San Francisco welfare bureaucracy'] },
  { id: 'cyf', name: 'CYF / the CYPF Act', type: 'Institution', alignment: 'Bureaucracy', group_size: 1,
    epithets: ['NZ Children, Young Persons & Their Families', 'Act of 1989'],
    note: 'Its Family Group Conference was believed modeled on Māori/Pacific practice, yet presumes equality and transparent information flow — the opposite of Samoan family meetings, which assert and contest hierarchy.' },
  { id: 'funders', name: 'US granting agencies', type: 'Institution', alignment: 'Bureaucracy', group_size: 1,
    epithets: ['United Way & others'],
    note: 'For forty years they rejected proposals framing Samoans as a culture; they fund groups "at risk" (poverty, low test scores), not cultures to preserve.' },
  { id: 'day_school', name: 'The community day school', type: 'Institution', alignment: 'Bureaucracy', group_size: 1,
    epithets: ['for Samoan high-schoolers near dropping out', 'a district satellite school'],
    note: 'The pivot of Chapter 3: NOSA housed it (Alofa ran the classroom) but Ben’s district paid and staffed it — culture and system meeting in one room.' },
];

export const CHARACTER_BY_ID: Record<string, Character> = Object.fromEntries(
  CHARACTERS.map((c) => [c.id, c]),
);
