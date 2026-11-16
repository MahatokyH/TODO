import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { InMemoryTaskRepository } from './tasks/inMemoryTaskRepository'

describe('App', () => {
  it('affiche le titre, le champ « Nouvelle tâche » et le message de liste vide', () => {
    render(<App repository={new InMemoryTaskRepository()} />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Tâches' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: 'Nouvelle tâche' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(
      'Aucune tâche pour le moment.',
    )
  })
})
