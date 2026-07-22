import type { FocalizationRow } from '../types';

/**
 * Narrative-gravity table: editorial estimates of how much of each section
 * attends to Samoan families & chiefs, churches, government systems, the
 * community brokers/fieldwork between them, and everyone/everything else
 * (theory, history, comparison). Values are percentages summing to 100.
 */
export const FOCALIZATION: FocalizationRow[] = [
  // 1 Introduction — grant-writing & the cultural/acultural frame
  { book: 1, family: 20, church: 5, state: 30, broker: 30, other: 15 },
  // 2 Ch. 1 — the ritual exchange system (family-heavy)
  { book: 2, family: 60, church: 12, state: 2, broker: 6, other: 20 },
  // 3 Ch. 2 — conversion & moral economies (church-heavy)
  { book: 3, family: 25, church: 55, state: 2, broker: 3, other: 15 },
  // 4 Part II — political & historical context (state & brokers)
  { book: 4, family: 10, church: 8, state: 40, broker: 32, other: 10 },
  // 5 Ch. 3 — the Ben/Alofa clash (broker meets system)
  { book: 5, family: 15, church: 2, state: 38, broker: 35, other: 10 },
  // 6 Ch. 4 — legislating families (the NZ state & the family)
  { book: 6, family: 38, church: 2, state: 42, broker: 12, other: 6 },
  // 7 Ch. 5 — constructing choice, compelling culture
  { book: 7, family: 20, church: 4, state: 48, broker: 18, other: 10 },
  // 8 Conclusion — acting apart
  { book: 8, family: 34, church: 8, state: 30, broker: 18, other: 10 },
];
