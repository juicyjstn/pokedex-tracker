import { NATURES, getNatureLabel } from '../../data/natures'

export function NatureSelect({ value, onChange }) {
  return (
    <select
      value={value || ''}
      onChange={e => onChange(e.target.value || null)}
      className="w-full px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[11px] text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
    >
      <option value="">No nature</option>
      {NATURES.map(n => (
        <option key={n.name} value={n.name}>{getNatureLabel(n)}</option>
      ))}
    </select>
  )
}
