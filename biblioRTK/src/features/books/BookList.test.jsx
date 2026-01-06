import { render } from '@testing-library/react'
import BookList from './BookList'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { describe, test, it, expect } from 'vitest'

test('renders book list', () => {
  render(
    <Provider store={store}>
      <BookList />
    </Provider>
  )
})
