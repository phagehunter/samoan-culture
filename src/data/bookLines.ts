/**
 * Book-page ranges per section of No Family Is an Island (Cornell UP, 2012).
 * Citations in the commentary use the print pagination ("NFI pp. 25–27");
 * the reader maps a cited page proportionally into that section's guide.
 */
export const SECTION_PAGES: Record<number, [number, number]> = {
  1: [1, 24], // Introduction
  2: [25, 47], // Ch. 1 — Exchanging While Not-Knowing
  3: [48, 71], // Ch. 2 — The Moral Economies of Conversion
  4: [72, 88], // Part II — Some Political and Historical Context
  5: [89, 113], // Ch. 3 — When Culture Is Not a System
  6: [114, 137], // Ch. 4 — Legislating Families as Cultural
  7: [138, 164], // Ch. 5 — Constructing Choice, Compelling Culture
  8: [165, 170], // Conclusion — Acting Apart
};

/** Kept for reader-scroll parity: "line counts" are page spans per section. */
export const BOOK_LINES: Record<number, number> = Object.fromEntries(
  Object.entries(SECTION_PAGES).map(([k, [a, b]]) => [Number(k), b - a + 1]),
) as Record<number, number>;

/**
 * Parse an "NFI p. 90" / "NFI pp. 89–92" citation into a section and a
 * relative position (the first cited page, offset within the section).
 */
export function parseLbCitation(citation: string): { book: number; line: number } | null {
  const m = citation.match(/pp?\.\s*(\d+)/);
  if (!m) return null;
  const page = Number(m[1]);
  for (const [book, [start, end]] of Object.entries(SECTION_PAGES)) {
    if (page >= start && page <= end) {
      return { book: Number(book), line: page - start + 1 };
    }
  }
  return null;
}
