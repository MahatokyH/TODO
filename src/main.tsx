import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { InMemoryTaskRepository } from './tasks/inMemoryTaskRepository'

// Dépôt en mémoire en attendant le dépôt localStorage (ADR 0001).
const repository = new InMemoryTaskRepository()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App repository={repository} />
  </StrictMode>,
)
