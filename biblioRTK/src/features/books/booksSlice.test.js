import reducer, { addBook, deleteBook, addLike, setSearch } from './booksSlice'
import { describe, test, it, expect } from 'vitest'


describe('booksSlice reducers', () => {
  it('should add a book', () => {
    const state = reducer(
      { items: [], status: 'idle', search: '' },
      addBook({ id: 1, title: 'Test Book' })
    )
    expect(state.items.length).toBe(1)
  })

  it('should delete a book', () => {
    const state = reducer(
      { items: [{ id: 1, title: 'Book' }], status: 'idle', search: '' },
      deleteBook(1)
    )
    expect(state.items.length).toBe(0)
  })

  it('should add like', () => {
    const state = reducer(
      { items: [{ id: 1, title: 'Book', likes: 0 }], status: 'idle', search: '' },
      addLike(1)
    )
    expect(state.items[0].likes).toBe(1)
  })

  it('should update search term ', ()=>{

      const state = reducer(
        {items : [] , search : ''},
        setSearch("abde")
      )

      expect(state.search.length>3 ? true : false ).toBe(true)
      console.log(state)

  })
})
