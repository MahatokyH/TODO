# 0001 - Sauvegarde dans localStorage, derrière un dépôt asynchrone

- Statut : acceptée
- Date : 2026-11-16

## Contexte

L'appli est un projet d'apprentissage qu'on peut quand même utiliser. Il n'y a ni comptes ni synchronisation entre appareils. Un backend pourrait venir plus tard.

## Décision

Les tâches sont sauvegardées dans le `localStorage` du navigateur, sous la clé versionnée `todo-app:v1`. Tout accès passe par un **dépôt de tâches** (`TaskRepository`) avec une interface **asynchrone** qui charge et sauvegarde la liste entière :

```ts
interface TaskRepository {
  load(): Promise<Task[]>;
  save(tasks: Task[]): Promise<void>;
}
```

- Des données illisibles (JSON cassé ou mauvaise forme) donnent une liste vide et un `console.warn`, sans planter l'appli.
- L'interface affiche « Chargement… » pendant `load()`, et aucun `save()` n'a lieu avant la fin du chargement, pour ne pas écraser les données avec une liste vide.

## Conséquences

- Pas de serveur, et les données restent dans un seul navigateur.
- L'interface est asynchrone alors que `localStorage` est synchrone : ça coûte un état de chargement, mais un futur backend se branchera sans toucher à l'interface.
- Sauvegarder la liste entière à chaque changement suffit à cette échelle. Avec un backend, on passerait sans doute à des opérations unitaires, et l'interface du dépôt changerait.
- La clé versionnée permet une migration si la forme d'une `Task` change.
