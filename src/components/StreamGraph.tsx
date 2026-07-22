import { useMemo, useState } from 'react';
import * as d3 from 'd3';
import { FOCALIZATION } from '../data/focalization';
import { BOOK_TITLES, SECTION_COUNT } from '../data/bookTitles';
import { useFilters } from '../context/FilterContext';
import { useElementSize } from '../hooks/useElementSize';

const KEYS = ['family', 'church', 'state', 'broker', 'other'] as const;
type StreamKey = (typeof KEYS)[number];

const STREAM_COLORS: Record<StreamKey, string> = {
  family: '#ea8a4c',
  church: '#e879f9',
  state: '#38bdf8',
  broker: '#2dd4bf',
  other: '#64748b',
};

const STREAM_LABELS: Record<StreamKey, string> = {
  family: 'Families & chiefs (aiga)',
  church: 'Churches',
  state: 'Government systems',
  broker: 'Brokers & fieldwork',
  other: 'Theory, history & comparison',
};

/** Where each section's material mostly unfolds (the setting strip). */
const SETTING: Record<number, string> = {
  1: 'US & NZ',
  2: 'Samoa ↔ diaspora',
  3: 'NZ (Auckland)',
  4: 'US & NZ',
  5: 'US (San Francisco)',
  6: 'NZ',
  7: 'NZ & US',
  8: 'US & NZ',
};

const MARGIN = { top: 34, right: 18, bottom: 92, left: 46 };

export default function StreamGraph() {
  const { bookRange } = useFilters();
  const { ref, width } = useElementSize<HTMLDivElement>();
  const [hoverBook, setHoverBook] = useState<number | null>(null);

  const height = 520;
  const innerW = Math.max(width - MARGIN.left - MARGIN.right, 50);
  const innerH = height - MARGIN.top - MARGIN.bottom;

  const x = useMemo(
    () => d3.scaleLinear().domain([1, SECTION_COUNT]).range([0, innerW]),
    [innerW],
  );
  const y = useMemo(() => d3.scaleLinear().domain([0, 100]).range([innerH, 0]), [innerH]);

  const series = useMemo(() => {
    const stack = d3
      .stack<(typeof FOCALIZATION)[number]>()
      .keys(KEYS as unknown as string[])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);
    return stack(FOCALIZATION);
  }, []);

  const area = useMemo(
    () =>
      d3
        .area<d3.SeriesPoint<(typeof FOCALIZATION)[number]>>()
        .x((d) => x(d.data.book))
        .y0((d) => y(d[0]))
        .y1((d) => y(d[1]))
        .curve(d3.curveCatmullRom.alpha(0.6)),
    [x, y],
  );

  const hoverRow = hoverBook ? FOCALIZATION[hoverBook - 1] : null;
  const [from, to] = bookRange;

  return (
    <div ref={ref} className="relative w-full h-full overflow-y-auto p-4">
      <div className="mb-2">
        <h2 className="font-display text-lg text-sepia-200">
          Narrative Gravity — what each section attends to
        </h2>
        <p className="hidden sm:block text-xs text-slate-400 max-w-3xl">
          The share of each section given to Samoan families &amp; chiefs, churches, government
          systems, the community brokers between them, and the surrounding theory and history
          (editorial estimates). The exam focuses on the Introduction and Chapters 1–4 (sections
          1–6). Slide the section window above to dim the rest.
        </p>
      </div>

      {width > 0 && (
        <svg
          width={width - 32}
          height={height}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const px = e.clientX - rect.left - MARGIN.left;
            const book = Math.round(x.invert(Math.max(0, Math.min(px, innerW))));
            setHoverBook(Math.max(1, Math.min(SECTION_COUNT, book)));
          }}
          onMouseLeave={() => setHoverBook(null)}
        >
          <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
            {/* y grid + axis */}
            {[0, 25, 50, 75, 100].map((v) => (
              <g key={v}>
                <line x1={0} x2={innerW} y1={y(v)} y2={y(v)} stroke="#1e293b" strokeWidth={1} />
                <text x={-8} y={y(v)} textAnchor="end" dominantBaseline="middle" className="fill-slate-500 text-[10px]">
                  {v}%
                </text>
              </g>
            ))}

            {/* streams */}
            {series.map((s, idx) => (
              <path
                key={KEYS[idx]}
                d={area(s) ?? undefined}
                fill={STREAM_COLORS[KEYS[idx]]}
                fillOpacity={0.72}
                stroke="#020617"
                strokeWidth={0.75}
              />
            ))}

            {/* exam-focus overlay (sections 1–6: Introduction + Chs. 1–4) */}
            <rect x={x(1)} y={0} width={x(6) - x(1)} height={innerH} fill="none" stroke="#e0c088" strokeDasharray="5 4" strokeWidth={1} pointerEvents="none" />
            <text x={x(3.3)} y={-10} textAnchor="middle" className="fill-sepia-300 text-[11px] italic">
              Exam focus — Introduction &amp; Chapters 1–4
            </text>

            {/* section-range dimmers */}
            {from > 1 && <rect x={0} y={0} width={x(from) - x(1)} height={innerH} fill="#020617" opacity={0.62} pointerEvents="none" />}
            {to < SECTION_COUNT && (
              <rect x={x(to)} y={0} width={x(SECTION_COUNT) - x(to)} height={innerH} fill="#020617" opacity={0.62} pointerEvents="none" />
            )}

            {/* hover guide */}
            {hoverBook && (
              <line x1={x(hoverBook)} x2={x(hoverBook)} y1={0} y2={innerH} stroke="#e2e8f0" strokeWidth={1} strokeDasharray="3 3" opacity={0.7} pointerEvents="none" />
            )}

            {/* x axis: section numbers */}
            {FOCALIZATION.map((r) => (
              <text
                key={r.book}
                x={x(r.book)}
                y={innerH + 14}
                textAnchor="middle"
                className={r.book <= 6 ? 'fill-sepia-300 text-[10px]' : 'fill-slate-500 text-[10px]'}
              >
                {r.book}
              </text>
            ))}
            <text x={innerW / 2} y={innerH + 30} textAnchor="middle" className="fill-slate-400 text-[11px]">
              Section (Introduction · Chs. 1–2 · Part II · Chs. 3–5 · Conclusion)
            </text>

            {/* setting strip */}
            <g transform={`translate(0, ${innerH + 42})`}>
              <text x={-8} y={9} textAnchor="end" className="fill-slate-400 text-[9px]">
                SETTING
              </text>
              {FOCALIZATION.map((r) => (
                <rect
                  key={r.book}
                  x={x(Math.max(r.book - 0.5, 1))}
                  y={0}
                  width={x(Math.min(r.book + 0.5, SECTION_COUNT)) - x(Math.max(r.book - 0.5, 1))}
                  height={13}
                  fill={SETTING[r.book].includes('NZ') && !SETTING[r.book].includes('US') ? '#134e4a' : SETTING[r.book].startsWith('US (') ? '#0c4a6e' : SETTING[r.book].startsWith('Samoa') ? '#78350f' : '#1e293b'}
                  stroke="#020617"
                />
              ))}
              {FOCALIZATION.map((r) => (
                <text
                  key={r.book}
                  x={r.book === 1 ? 2 : x(r.book)}
                  y={9.5}
                  textAnchor={r.book === 1 ? 'start' : 'middle'}
                  className="fill-slate-300 text-[8px]"
                >
                  {SETTING[r.book]}
                </text>
              ))}
            </g>
          </g>
        </svg>
      )}

      {/* legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-1 mt-1 text-xs">
        {KEYS.map((k) => (
          <span key={k} className="flex items-center gap-1.5 text-slate-300">
            <span className="w-3 h-3 rounded-sm" style={{ background: STREAM_COLORS[k] }} />
            {STREAM_LABELS[k]}
          </span>
        ))}
      </div>

      {/* hover tooltip */}
      {hoverRow && (
        <div className="absolute top-24 right-8 z-30 w-72 bg-slate-900/95 border border-slate-600 rounded-lg p-3 shadow-2xl pointer-events-none">
          <div className="font-display text-sepia-200 text-sm mb-1">
            {hoverRow.book}. {BOOK_TITLES[hoverRow.book]}
          </div>
          <div className="text-[11px] mb-2 text-slate-400 border-b border-slate-700 pb-1.5">
            Setting: {SETTING[hoverRow.book]}
          </div>
          <ul className="text-xs space-y-0.5">
            {KEYS.map((k) => (
              <li key={k} className="flex justify-between">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2 h-2 rounded-sm" style={{ background: STREAM_COLORS[k] }} />
                  {STREAM_LABELS[k]}
                </span>
                <span className="tabular-nums text-slate-400">{hoverRow[k]}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
