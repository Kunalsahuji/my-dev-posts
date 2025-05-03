import Book from './components/Book'

//Ensure backend API is running at `http://localhost:5000/api/books`
// if you need to run the backend for above api, you can use day-9-axios-http-client/backend folder to run the backend.
const App = () => {
  return (
    <div>
      <Book />
    </div>
  )
}

export default App
