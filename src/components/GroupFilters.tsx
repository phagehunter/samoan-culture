import { GROUP_LABELS, useFilters } from '../context/FilterContext';
import type { GroupKey } from '../types';

const GROUP_DOT: Record<GroupKey, string> = {
  families: 'bg-orange-400',
  churches: 'bg-fuchsia-400',
  systems: 'bg-sky-400',
  brokers: 'bg-teal-400',
};

/** Checkbox toggles isolating social orders across all views. */
export default function GroupFilters() {
  const { enabledGroups, toggleGroup } = useFilters();

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
      {(Object.keys(GROUP_LABELS) as GroupKey[]).map((g) => (
        <label
          key={g}
          className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer select-none hover:text-slate-100"
        >
          <input
            type="checkbox"
            checked={enabledGroups[g]}
            onChange={() => toggleGroup(g)}
            className="accent-orange-500 w-3.5 h-3.5"
          />
          <span className={`inline-block w-2 h-2 rounded-full ${GROUP_DOT[g]}`} />
          {GROUP_LABELS[g]}
        </label>
      ))}
    </div>
  );
}
