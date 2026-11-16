# 0002 - État géré par un reducer pur, sans bibliothèque

- Statut : acceptée
- Date : 2026-11-16

## Contexte

Il n'y a qu'une seule liste de tâches, avec une poignée d'opérations. Le projet est développé en TDD, donc la logique métier doit être testable facilement.

## Décision

Toute la logique métier tient dans `tasksReducer`, une **fonction pure** `(state, action) => state`, testée sans React. Le hook `useTodos` l'utilise via `useReducer` et fait le lien avec le `TaskRepository` (chargement initial et sauvegarde après chaque changement). Pas de Redux, Zustand ni Context global.

Le filtre courant ne fait pas partie de cet état : il vient de l'URL (`hashchange`), via un hook séparé, sans routeur.

## Conséquences

- Les règles métier (nettoyage du titre, titre vide, suppression des terminées) sont testées **à travers `<App>`** avec un dépôt en mémoire, et pas par des tests directs du reducer. Ça garde un seul seam de test pour la logique et laisse le reducer libre d'être restructuré. On pourra ajouter des tests directs du reducer si un cas devient trop pénible à tester via l'interface.
- Si l'appli grossit (plusieurs listes, état partagé entre des composants éloignés), on pourra revoir ce choix et passer à un Context ou à une bibliothèque.
