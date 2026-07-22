import { useState } from 'react';
import { FilterProvider } from './context/FilterContext';
import BookSlider from './components/BookSlider';
import GroupFilters from './components/GroupFilters';
import NetworkGraph from './components/NetworkGraph';
import StreamGraph from './components/StreamGraph';
import TermsGraph from './components/TermsGraph';
import ExamView from './components/ExamView';
import SidePanel from './components/SidePanel';

type View = 'network' | 'stream' | 'terms' | 'exam';

const TABS: { id: View; label: string; sub: string }[] = [
  { id: 'exam', label: 'Study / Exam', sub: 'the KEY terms & the central clash, at a glance' },
  { id: 'terms', label: 'Key Terms', sub: 'the book’s vocabulary as a concept map' },
  { id: 'network', label: 'People & Systems', sub: 'who meets whom across the social orders' },
  { id: 'stream', label: 'Narrative Gravity', sub: 'what each section attends to' },
];

/** Brand mark: a woven fine-mat ('ie toga) lattice. */
function BrandMark() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10 shrink-0" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <g stroke="#e0c088" strokeWidth="2.4" strokeLinecap="round" opacity="0.95">
        <line x1="14" y1="20" x2="50" y2="20" />
        <line x1="14" y1="32" x2="50" y2="32" />
        <line x1="14" y1="44" x2="50" y2="44" />
      </g>
      <g stroke="#ea8a4c" strokeWidth="2.4" strokeLinecap="round" opacity="0.95">
        <line x1="20" y1="14" x2="20" y2="50" />
        <line x1="32" y1="14" x2="32" y2="50" />
        <line x1="44" y1="14" x2="44" y2="50" />
      </g>
      <rect x="12" y="12" width="40" height="40" rx="6" fill="none" stroke="#b3854a" strokeWidth="1.6" />
    </svg>
  );
}

export default function App() {
  const [view, setView] = useState<View>('exam');

  return (
    <FilterProvider>
      <div className="h-full flex flex-col bg-slate-950">
        {/* ——— Branded header ——— */}
        <header className="border-b border-slate-800 px-4 sm:px-5 py-2 sm:py-3 flex flex-wrap items-center gap-x-8 gap-y-1.5">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <BrandMark />
            <div>
              <h1 className="font-display font-bold text-[15px] sm:text-[20px] leading-none text-sepia-200 uppercase tracking-[0.1em] sm:tracking-[0.16em]">
                No Family Is an Island — Study Companion
              </h1>
              <p className="text-[12px] text-slate-400 mt-1 tracking-wide">
                A study aid to Ilana Gershon&apos;s ethnography of Samoans in diaspora — for the exam (Intro &amp; Chs. 1–4)
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Project by{' '}
                <a
                  href="https://curtishoffmann.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-orange-300 underline decoration-dotted underline-offset-2"
                >
                  Curtis Hoffmann
                </a>
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-1 ml-auto">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setView(t.id)}
                title={t.sub}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md text-[13px] sm:text-[15px] transition-colors border ${
                  view === t.id
                    ? 'bg-orange-900/40 border-orange-600/60 text-orange-200'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </header>

        {/* ——— Global controls: section window + group toggles ——— */}
        <div className="border-b border-slate-800 px-4 sm:px-5 py-2 sm:py-2.5 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-1.5 bg-slate-900/40">
          <BookSlider />
          <GroupFilters />
        </div>

        {/* ——— Main: view + reading panel (side-by-side on desktop, stacked on mobile) ——— */}
        <main className="flex-1 flex flex-col md:flex-row min-h-0">
          <section className="flex-1 min-w-0 min-h-0">
            {view === 'network' && <NetworkGraph />}
            {view === 'stream' && <StreamGraph />}
            {view === 'terms' && <TermsGraph />}
            {view === 'exam' && <ExamView />}
          </section>
          <SidePanel />
        </main>
      </div>
    </FilterProvider>
  );
}
