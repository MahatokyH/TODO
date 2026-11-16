/** Une tâche de la liste. Voir GLOSSARY.md. */
export interface Task {
  id: string
  title: string
  completed: boolean
  /** Horodatage de création, en millisecondes depuis l'epoch. */
  createdAt: number
}

/**
 * Dépôt de tâches : charge et sauvegarde la liste entière.
 * Asynchrone pour qu'un futur backend se branche sans changer l'interface. Voir ADR 0001.
 */
export interface TaskRepository {
  load(): Promise<Task[]>
  save(tasks: Task[]): Promise<void>
}
