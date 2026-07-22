/** Shared domain types for the No Family Is an Island study companion. */

/**
 * Fine-grained alignment used for node colouring. Gershon's ethnography is
 * about people moving between social orders, so the "cast" is a mix of
 * individuals, families, churches, community organizations, and government
 * bureaucracies. Alignments map onto the four coarse UI filter groups
 * (see GROUP_OF_ALIGNMENT in src/context/FilterContext.tsx).
 */
export type Alignment =
  | 'Family' // Samoan migrant families & their members (the aiga)
  | 'Matai' // chiefs & orators — the titled leaders of the exchange system
  | 'Church' // congregations, ministers & church communities
  | 'Bureaucracy' // government agencies, schools, welfare & funders — the "systems"
  | 'Broker' // community organizations & cultural brokers between systems & culture
  | 'Fieldwork'; // Gershon the ethnographer and the scholarly frame

export type CharacterType = 'Person' | 'Collective' | 'Institution';

export interface Character {
  id: string;
  name: string;
  type: CharacterType;
  alignment: Alignment;
  /** Short identifying descriptors shown on the character card. */
  epithets: string[];
  /** >1 marks an aggregate/collective node (e.g. a congregation or agency). */
  group_size: number;
  note?: string;
}

export type InteractionType =
  | 'exchange' // fa'alavelave / si'i ritual exchange
  | 'conversion' // moving between churches / moral economies
  | 'brokering' // translating between culture and a system
  | 'conflict' // a clash (often of reflexivities)
  | 'bureaucracy' // navigating a government agency
  | 'kinship' // family obligation & care
  | 'teaching' // instruction, interview, or fieldwork exchange
  | 'classifying'; // labelling something cultural vs acultural

export interface Interaction {
  source: string;
  target: string;
  /** Section 1–8 (Introduction, Chs. 1–2, Part II intro, Chs. 3–5, Conclusion). */
  book: number;
  type: InteractionType;
  weight: number;
  /** true = a defining "clash of reflexivities" the exam is likely to test. */
  clash: boolean;
  summary: string;
  insight?: string;
  citation?: string;
}

export interface FocalizationRow {
  book: number;
  family: number;
  church: number;
  state: number;
  broker: number;
  other: number;
}

/** Coarse UI filter groups (checkbox toggles). */
export type GroupKey = 'families' | 'churches' | 'systems' | 'brokers';

/** What is currently pinned in the Close Reading panel. */
export type Selection =
  | { kind: 'edge'; a: string; b: string; interactions: Interaction[] }
  | { kind: 'character'; id: string }
  | { kind: 'term'; id: string };
