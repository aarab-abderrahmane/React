import { Provider } from 'react-redux'
import { store } from './app/store'
import BookForm from './features/books/BookForm'
import BookList from './features/books/BookList'

export default function App() {
  return (
    <Provider store={store}>
      <BookForm />
      <BookList />
    </Provider>
  )
}
