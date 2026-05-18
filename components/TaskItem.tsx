'use client'

interface Task {
  id: string
  title: string
  completed: boolean
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
  dueDate: string | null
}

interface TaskItemProps {
  task: Task
  onToggle: (id: string, completed: boolean) => void
  onDelete: (id: string) => void
}

const priorityColors = {
  LOW: 'bg-gray-100 text-gray-600',
  MEDIUM: 'bg-yellow-100 text-yellow-700',
  HIGH: 'bg-red-100 text-red-700',
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 transition hover:border-gray-200">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id, !task.completed)}
        className="h-4 w-4 cursor-pointer accent-blue-600"
      />
      <span
        className={`flex-1 text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}
      >
        {task.title}
      </span>
      <span className={`rounded px-1.5 py-0.5 text-xs font-medium ${priorityColors[task.priority]}`}>
        {task.priority.charAt(0) + task.priority.slice(1).toLowerCase()}
      </span>
      {task.dueDate && (
        <span className="text-xs text-gray-400">
          {new Date(task.dueDate).toLocaleDateString()}
        </span>
      )}
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-300 transition hover:text-red-400"
        aria-label="Delete task"
      >
        ×
      </button>
    </li>
  )
}
