import { TeamSlot } from './TeamSlot'

export function TeamBar() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
      {[0, 1, 2, 3, 4, 5].map(i => (
        <TeamSlot key={i} index={i} />
      ))}
    </div>
  )
}
