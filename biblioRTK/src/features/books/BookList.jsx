import { useSelector } from 'react-redux'
import BookCard from './BookCard'

export default function BookList() {
  const { items, search } = useSelector(state => state.books)
  console.log(items)

  const filtered = items.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {filtered.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}
