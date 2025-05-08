import { BrowserRouter as Router, Routes, Route, BrowserRouter,Link } from 'react-router-dom';
import Form from './components/Form';
import Display from './components/Display';
import './App.css'
const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <nav style={{ margin: '20px', fontSize: '20px', fontWeight: 'bold', gap: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to="/">Form</Link>
                    <Link to="/display">Display</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/display" element={<Display />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}


export default App
