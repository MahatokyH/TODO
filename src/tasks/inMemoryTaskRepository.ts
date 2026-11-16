import type { Task, TaskRepository } from './task'

/**
 * Dépôt de tâches en mémoire pour les tests.
 * Peut être prérempli, et enregistre chaque liste passée à `save`.
 */
export class InMemoryTaskRepository implements TaskRepository {
  /** Les listes passées à `save`, dans l'ordre des appels. */
  readonly saveCalls: Task[][] = []
  private tasks: Task[]

  constructor(initialTasks: Task[] = []) {
    this.tasks = structuredClone(initialTasks)
  }

  async load(): Promise<Task[]> {
    return structuredClone(this.tasks)
  }

  async save(tasks: Task[]): Promise<void> {
    const snapshot = structuredClone(tasks)
    this.saveCalls.push(snapshot)
    this.tasks = snapshot
  }
}
