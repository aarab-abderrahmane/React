export const fetchBooksApi = async () => {
  const res = await fetch('https:/books')

  if (!res.ok) throw new Error('Failed to fetch books')
    
  return res.json()
}
