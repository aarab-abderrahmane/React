import { render, screen } from '@testing-library/react'
import BookForm from './BookForm'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { describe, test, it, expect } from 'vitest'

test('renders form', () => {
  render(
    <Provider store={store}>
      <BookForm />
    </Provider>
  )
  expect(screen.getByPlaceholderText('Book title')).toBeInTheDocument()
})
