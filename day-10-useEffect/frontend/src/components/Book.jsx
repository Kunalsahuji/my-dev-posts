import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Book = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/books')
            .then(res => {
                setBooks(res.data)
                console.log(res.data)
            })
            .catch(err => console.error(err))
    }, [])
    return (

        <div>
            <h1>📚 Books Details: </h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Book
