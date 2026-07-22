/** Short editorial titles for the eight sections, used by the playback overlay. */
export const BOOK_TITLES: Record<number, string> = {
  1: 'Introduction — Cultural & Acultural',
  2: 'Ch. 1 — Exchanging While Not-Knowing',
  3: 'Ch. 2 — Moral Economies of Conversion',
  4: 'Part II — Political & Historical Context',
  5: 'Ch. 3 — When Culture Is Not a System',
  6: 'Ch. 4 — Legislating Families as Cultural',
  7: 'Ch. 5 — Constructing Choice, Compelling Culture',
  8: 'Conclusion — Acting Apart',
};

/** Total number of sections (Introduction, Chs. 1–2, Part II intro, Chs. 3–5, Conclusion). */
export const SECTION_COUNT = 8;

/** Which sections the exam emphasizes most (Introduction + Chs. 1–4). */
export const EXAM_FOCUS: number[] = [1, 2, 3, 4, 5, 6];
