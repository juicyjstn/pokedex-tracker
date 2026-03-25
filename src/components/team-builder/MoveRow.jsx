import { TYPE_COLORS, TYPE_TEXT } from '../typeColors'

const CATEGORY_ICONS = {
  physical: { label: 'Ph', color: 'text-red-600 dark:text-red-400' },
  special:  { label: 'Sp', color: 'text-blue-600 dark:text-blue-400' },
  status:   { label: 'St', color: 'text-gray-500 dark:text-gray-400' },
}

export function MoveRow({ entry, onSelect, isSelected, isAssigned, compact = false }) {
  const cat = CATEGORY_ICONS[entry.category] || CATEGORY_ICONS.status
  const typeBg = TYPE_COLORS[entry.type] || 'bg-gray-400'
  const typeText = TYPE_TEXT[entry.type] || 'text-white'

  return (
    <button
      onClick={onSelect}
      disabled={isAssigned}
      className={`w-full grid items-center gap-1 px-2 py-1 text-left rounded-lg transition-colors text-xs
        ${compact ? 'grid-cols-[1fr_50px_32px_32px_16px_60px]' : 'grid-cols-[1fr_50px_32px_32px_16px_60px]'}
        ${isSelected
          ? 'bg-blue-100 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-600'
          : isAssigned
            ? 'opacity-40 cursor-default'
            : 'hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer'
        }`}
    >
      {/* Move name */}
      <span className="font-medium text-gray-900 dark:text-gray-100 truncate">
        {entry.move}
        {entry.isPreEvo && (
          <span className="text-[9px] text-amber-600 dark:text-amber-400 ml-1 font-normal">
            ({entry.preEvoName})
          </span>
        )}
      </span>

      {/* Type badge */}
      <span className={`${typeBg} ${typeText} text-[9px] font-bold px-1.5 py-0 rounded-full uppercase text-center`}>
        {entry.type?.slice(0, 4)}
      </span>

      {/* Power */}
      <span className="text-gray-600 dark:text-gray-400 text-center font-mono text-[11px]">
        {entry.power ?? '—'}
      </span>

      {/* Accuracy */}
      <span className="text-gray-600 dark:text-gray-400 text-center font-mono text-[11px]">
        {entry.accuracy ?? '—'}
      </span>

      {/* Category */}
      <span className={`${cat.color} font-bold text-[10px] text-center`}>{cat.label}</span>

      {/* Source */}
      <span className="text-gray-500 dark:text-gray-400 text-[10px] text-right truncate">
        {entry.sourceLabel}
      </span>
    </button>
  )
}
