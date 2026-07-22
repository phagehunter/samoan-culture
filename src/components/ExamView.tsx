import { TERMS, TERM_BY_ID, DOMAIN_COLORS, DOMAIN_LABELS, type TermDomain } from '../data/terms';
import { BOOK_TITLES } from '../data/bookTitles';
import { useFilters } from '../context/FilterContext';

/** A term chip that pins the term in the Commentary sidebar when clicked. */
function TermChip({ id }: { id: string }) {
  const { setSelection } = useFilters();
  const t = TERM_BY_ID[id];
  if (!t) return null;
  return (
    <button
      onClick={() => setSelection({ kind: 'term', id })}
      title={t.gloss}
      className="text-left rounded-md border border-slate-700 bg-slate-900/70 px-2 py-1 hover:border-orange-600/60 hover:bg-slate-800/70 transition-colors"
    >
      <span className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: DOMAIN_COLORS[t.domain] }} />
        <span className="text-[13.5px] text-slate-100 italic">{t.term}</span>
      </span>
    </button>
  );
}

/** "Open the chapter guide" pill. */
function GuideLink({ book, label }: { book: number; label?: string }) {
  const { openText } = useFilters();
  return (
    <button
      onClick={() => openText(book)}
      className="text-[11px] font-mono text-orange-400/90 hover:text-orange-300 hover:underline whitespace-nowrap"
    >
      {label ?? `§${book} guide`} ↗
    </button>
  );
}

const DOMAIN_ORDER: TermDomain[] = ['concept', 'exchange', 'social', 'church', 'context'];

/** Chapter-by-chapter cram notes (exam focus: Introduction + Chs. 1–4). */
const CHAPTER_NOTES: { book: number; focus: boolean; points: string[] }[] = [
  { book: 1, focus: true, points: [
    'The whole book turns on cultural (traditional & locatable) vs. acultural (modern & universal).',
    'US funding lesson: present Samoans in terms of race & class, not culture (40 years of NOSA/Samoa mo Samoa grant-writing).',
    'Diaspora = a scattering (Greek dia + spora). Know the denotation. "No family is an island" (after Donne).',
  ] },
  { book: 2, focus: true, points: [
    'fa’alavelave = Samoan ritual exchange; the si’i is the concrete presentation within it.',
    'Thesis: Samoans separate ritual from capitalist money through strategic ignorance (not-knowing), NOT through objects — revising Bohannan’s "spheres of exchange."',
    'Shore’s two types: indirect exchange (all give to one recipient, competing) vs. complementary exchange (fine mats ↔ food/cash).',
  ] },
  { book: 3, focus: true, points: [
    'Conversion = moving between moral economies (reflexive stances), NOT between doctrines — some double-attend.',
    'The reversal: the acultural evangelical church is felt to be MORE moral. Emic term: "meaningless" vs. "meaningful" worship.',
    'Shore’s sociocentric personhood: morality is public — "a misdeed is not a misdeed until publicly known."',
  ] },
  { book: 4, focus: true, points: [
    'The comparison: same migrant group, opposite outcomes. NZ funds culture (Samoans ride Māori culture-bearer status); the US racializes (race/class).',
    '"I asked about culture; Tim replied about race" — racial equality used to FORBID cultural attention.',
    'Reflexivity introduced (linguistic sense, not the ethnographer’s self-reflection). Neoliberalism (Reaganomics / Rogernomics) is the shared backdrop.',
  ] },
  { book: 5, focus: true, points: [
    '★ The Ben/Alofa clash: NOT a clash of cultures (both cosmopolitan) but a CLASH OF REFLEXIVITIES.',
    'Ben = systems carrier (bureaucracy, acultural); Alofa = cultural broker / culture-bearer. Only the Samoan is marked as "having culture."',
    'Samoans EMBODY a role, they do not MEDIATE it. Representation (matai) is OK; translation is not — cultural knowledge lacks translatability (Benjamin).',
  ] },
  { book: 6, focus: true, points: [
    'NZ’s CYPF Act (1989) tried to legislate culture; its Family Group Conference presumes equality & transparent info-flow.',
    'The paradox: legislating FOR culture still hides a nuclear-family model presented as acultural.',
    'Migration shifts the key kin tie from sister-brother (feagaiga) to parent-child. Rita’s case: hierarchy stretched too thin.',
  ] },
  { book: 7, focus: false, points: [
    'Neoliberal "choice" is not freedom from the system — it is a new obligation to manage self and family on the state’s terms.',
  ] },
  { book: 8, focus: false, points: [
    'Living in diaspora: you often cannot simply go back, and it is hard to legislate a culture. No family is an island.',
  ] },
];

export default function ExamView() {
  const examTerms = TERMS.filter((t) => t.exam);

  return (
    <div className="h-full overflow-y-auto p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h2 className="font-display text-2xl text-sepia-200">Study &amp; Exam — the essentials</h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            A cram sheet for Gershon&apos;s <i>No Family Is an Island</i>, weighted toward the
            Introduction and Chapters 1–4. Click any <span className="italic text-slate-200">term</span>{' '}
            to pin its full definition in the sidebar; open any chapter&apos;s guide with the ↗ links.
          </p>
        </div>

        {/* The one-sentence thesis */}
        <div className="rounded-xl border border-sepia-600/40 bg-sepia-700/10 p-4">
          <div className="text-[11px] uppercase tracking-widest text-sepia-300 mb-1">The book in one idea</div>
          <p className="font-reading text-[16px] leading-relaxed text-slate-100">
            Samoan migrants constantly sort life into the <b className="text-sepia-200">cultural</b>{' '}
            (traditional, locatable — ritual exchange) and the <b className="text-sepia-200">acultural</b>{' '}
            (modern, universal — capitalism, bureaucracy, law). What they are really managing is a set
            of <b className="text-sepia-200">reflexivities</b> — different ways of relating to the
            social orders they move between — and the trouble comes when those reflexivities{' '}
            <b className="text-red-300">clash</b>.
          </p>
        </div>

        {/* The central clash */}
        <div>
          <h3 className="font-display text-lg text-slate-100 mb-2">
            ★ The central clash <span className="text-slate-500 text-sm">— Chapter 3, most testable</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-sky-700/50 bg-sky-950/30 p-4">
              <div className="text-sky-300 font-semibold">Ben — the systems carrier</div>
              <ul className="mt-2 space-y-1.5 text-[14px] text-slate-200 leading-relaxed list-disc pl-4">
                <li>School principal over the day schools (not Samoan — from the Philippines as a child).</li>
                <li>Represents the <b>bureaucratic system</b>, treated as <b>acultural</b>.</li>
                <li>Shows connection only by pleading he is <i>&ldquo;caught in the system,&rdquo;</i> only partly committed to his role.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-teal-700/50 bg-teal-950/30 p-4">
              <div className="text-teal-300 font-semibold">Alofa — the cultural broker</div>
              <ul className="mt-2 space-y-1.5 text-[14px] text-slate-200 leading-relaxed list-disc pl-4">
                <li>Head of NOSA&apos;s SF branch; runs the day-school classroom; the <b>culture-bearer</b>.</li>
                <li>Expects Ben to act like a <b>matai</b>: promise to do what he can, never a flat &ldquo;no.&rdquo;</li>
                <li>Her verdict: <i>&ldquo;No matai would ever do anything like that.&rdquo;</i> Samoans <b>embody</b> a role; they do not <b>mediate</b> it.</li>
              </ul>
            </div>
          </div>
          <p className="text-[13px] text-slate-400 mt-2 leading-relaxed">
            Why it matters: this is <b className="text-slate-200">not a clash of cultures</b> (both are
            cosmopolitan) but a <b className="text-red-300">clash of reflexivities</b> — one person
            connected to a system, the other engaged with a culture. See it live on the{' '}
            <span className="text-orange-300">People &amp; Systems</span> graph (the thick red edge in §5).{' '}
            <GuideLink book={5} label="Open the Ch. 3 guide" />
          </p>
        </div>

        {/* cultural vs acultural quick contrast */}
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-orange-700/40 bg-orange-950/20 p-4">
            <div className="text-orange-300 font-semibold flex items-center gap-2">
              <TermChip id="cultural" /> <span className="text-[11px] text-slate-500">= traditional &amp; locatable</span>
            </div>
            <p className="text-[14px] text-slate-200 mt-2 leading-relaxed">
              Authentic, tied to Samoa: fa’alavelave, fine mats, chiefly obligation, alofa. Creates
              obligation and family unity.
            </p>
          </div>
          <div className="rounded-xl border border-sky-700/40 bg-sky-950/20 p-4">
            <div className="text-sky-300 font-semibold flex items-center gap-2">
              <TermChip id="acultural" /> <span className="text-[11px] text-slate-500">= modern &amp; universal</span>
            </div>
            <p className="text-[14px] text-slate-200 mt-2 leading-relaxed">
              Capitalism, bureaucracy, law, technology — felt to be culture-free. Enables
              disentanglement from obligation. (For anthropologists, nothing is really acultural.)
            </p>
          </div>
        </div>

        {/* Exam-flagged vocabulary, grouped by domain */}
        <div>
          <h3 className="font-display text-lg text-slate-100 mb-1">
            Flagged vocabulary <span className="text-slate-500 text-sm">— the ★ / KEY / on-the-exam terms</span>
          </h3>
          <p className="text-[12px] text-slate-500 mb-3">{examTerms.length} terms. Click one to read its full entry and related concepts in the sidebar.</p>
          <div className="space-y-3">
            {DOMAIN_ORDER.map((d) => {
              const terms = examTerms.filter((t) => t.domain === d);
              if (!terms.length) return null;
              return (
                <div key={d}>
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest mb-1.5" style={{ color: DOMAIN_COLORS[d] }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: DOMAIN_COLORS[d] }} />
                    {DOMAIN_LABELS[d]}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {terms.map((t) => (
                      <TermChip key={t.id} id={t.id} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chapter-by-chapter cram */}
        <div>
          <h3 className="font-display text-lg text-slate-100 mb-2">Chapter by chapter, in a nutshell</h3>
          <div className="space-y-2.5">
            {CHAPTER_NOTES.map((c) => (
              <div
                key={c.book}
                className={`rounded-xl border p-3.5 ${
                  c.focus ? 'border-slate-700 bg-slate-900/60' : 'border-slate-800 bg-slate-900/30 opacity-80'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="font-display text-[15px] text-sepia-200">
                    {c.focus && <span className="text-orange-300 mr-1">◆</span>}
                    §{c.book}. {BOOK_TITLES[c.book]}
                  </div>
                  <GuideLink book={c.book} />
                </div>
                <ul className="space-y-1 text-[14px] text-slate-200 leading-relaxed list-disc pl-4">
                  {c.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[12px] text-slate-500 italic font-reading pt-2 border-t border-slate-800">
          These notes are an original study aid. The book — Ilana Gershon, <i>No Family Is an Island:
          Cultural Expertise among Samoans in Diaspora</i> (Cornell University Press, 2012) — is in
          copyright and worth reading in full.
        </p>
      </div>
    </div>
  );
}
