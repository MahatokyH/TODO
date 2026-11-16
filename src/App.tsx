import { useId } from 'react'
import styles from './App.module.css'
import type { TaskRepository } from './tasks/task'

interface AppProps {
  repository: TaskRepository
}

// `repository` servira au chargement et à la sauvegarde des tâches (tickets suivants).
export default function App({ repository: _repository }: AppProps) {
  const newTaskId = useId()

  return (
    <main className={styles.app}>
      <h1 className={styles.title}>Tâches</h1>
      <label htmlFor={newTaskId} className={styles.visuallyHidden}>
        Nouvelle tâche
      </label>
      <input
        id={newTaskId}
        className={styles.newTask}
        type="text"
        placeholder="Que faut-il faire ?"
        autoComplete="off"
      />
      <p role="status" className={styles.empty}>
        Aucune tâche pour le moment.
      </p>
    </main>
  )
}
