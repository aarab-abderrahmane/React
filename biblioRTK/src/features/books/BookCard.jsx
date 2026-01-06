import { useDispatch } from 'react-redux'
import { deleteBook, addLike } from './booksSlice'

export default function BookCard({ book }) {
  const dispatch = useDispatch()

  return (
    <div data-testid="book-card">
      <h3>{book.title}</h3>
      <p>Likes: {book.likes}</p>
      <button onClick={() => dispatch(addLike(book.id))}>Like</button>
      <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
    </div>
  )
}
