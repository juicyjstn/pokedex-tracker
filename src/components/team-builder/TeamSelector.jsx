import { useState } from 'react'
import { useTeamStore } from '../../store/useTeamStore'

export function TeamSelector() {
  const { teams, activeTeamId, switchTeam, createTeam, renameTeam, deleteTeam } = useTeamStore()
  const [editing, setEditing] = useState(false)
  const [editName, setEditName] = useState('')

  const activeTeam = teams.find(t => t.id === activeTeamId)

  const handleRename = () => {
    if (editName.trim() && activeTeam) {
      renameTeam(activeTeam.id, editName.trim())
    }
    setEditing(false)
  }

  const handleDelete = () => {
    if (teams.length <= 1) return
    if (activeTeam) deleteTeam(activeTeam.id)
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* Team dropdown */}
      <select
        value={activeTeamId || ''}
        onChange={e => switchTeam(e.target.value)}
        className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {teams.map(t => (
          <option key={t.id} value={t.id}>{t.name}</option>
        ))}
      </select>

      {/* Rename */}
      {editing ? (
        <div className="flex items-center gap-1">
          <input
            autoFocus
            value={editName}
            onChange={e => setEditName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleRename(); if (e.key === 'Escape') setEditing(false) }}
            className="px-2 py-1 rounded border border-blue-400 dark:border-blue-500 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 focus:outline-none w-32"
            placeholder="Team name"
          />
          <button onClick={handleRename} className="text-blue-500 hover:text-blue-700 text-sm font-medium">Save</button>
          <button onClick={() => setEditing(false)} className="text-gray-400 hover:text-gray-600 text-sm">Cancel</button>
        </div>
      ) : (
        <button
          onClick={() => { setEditName(activeTeam?.name || ''); setEditing(true) }}
          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Rename team"
          title="Rename team"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
      )}

      {/* New team */}
      <button
        onClick={() => createTeam()}
        className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors"
      >
        + New
      </button>

      {/* Delete */}
      {teams.length > 1 && (
        <button
          onClick={handleDelete}
          className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          aria-label="Delete team"
          title="Delete team"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  )
}
