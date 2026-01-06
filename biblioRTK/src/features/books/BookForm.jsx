import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from './booksSlice'

export default function BookForm() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const submit = e => {
    e.preventDefault()
    dispatch(addBook({ id: Date.now(), title }))
    setTitle('')
  }

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
