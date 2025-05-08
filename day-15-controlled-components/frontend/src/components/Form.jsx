
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/display', { state: { name, email } });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ textAlign: 'center' }}>
                <h1>Controlled Component</h1>
                <h2>Form</h2>
                <p>Enter your name and email in the form below:</p>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form