# Glossaire

Vocabulaire du domaine. L'interface est en français, le code en anglais : chaque terme indique son nom dans le code.

**Tâche** (`Task`)
Un élément de la liste : `{ id, title, completed, createdAt }`. Dans l'interface et les tickets, on dit « tâche », jamais « todo » ni « item ».

**Titre** (`title`)
Le texte d'une tâche. Nettoyé des espaces au début et à la fin ; jamais vide (un ajout vide est ignoré, une modification qui vide le titre supprime la tâche). Les doublons sont autorisés.

**Terminée** (`completed: true`) / **Active** (`completed: false`)
Les deux états d'une tâche. On dit « cocher » / « décocher » pour passer de l'un à l'autre.

**Filtre** (`Filter`: `'all' | 'active' | 'completed'`)
La vue courante de la liste : toutes / actives / terminées. Reflété dans l'URL (`#/`, `#/active`, `#/completed`). Un filtre ne modifie jamais les tâches.

**Tâches restantes**
Le nombre de tâches actives, affiché dans le compteur.

**Supprimer les terminées** (`clearCompleted`)
Supprime d'un coup toutes les tâches terminées.

**Dépôt de tâches** (`TaskRepository`)
L'interface asynchrone qui charge et sauvegarde la liste entière : `load(): Promise<Task[]>`, `save(tasks): Promise<void>`. Implémentation actuelle : `localStorage`, clé `todo-app:v1`. Voir ADR 0001.

**Reducer des tâches** (`tasksReducer`)
La fonction pure qui contient toute la logique métier (ajouter, cocher, modifier, supprimer, supprimer les terminées). Voir ADR 0002.
