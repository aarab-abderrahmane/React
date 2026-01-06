import { render, screen } from '@testing-library/react'
import BookCard from './BookCard'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { describe, test, it, expect } from 'vitest'

test('renders book card', () => {
  render(
    <Provider store={store}>
      <BookCard book={{ id: 1, title: 'Book', likes: 0 }} />
    </Provider>
  )
  expect(screen.getByText('Book')).toBeInTheDocument()
})
