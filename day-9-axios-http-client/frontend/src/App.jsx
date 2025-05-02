import { useEffect, useState } from 'react'
import axiosClient from './axiosClient'
const App = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    try {
      const res = await axiosClient.get('/books')
      console.log(`res`, res.data)
      setBooks(res.data)
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <h1>📚 Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
