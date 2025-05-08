import { useLocation } from 'react-router-dom';
const Display = () => {
    const location = useLocation();
    const { name, email } = location.state || { name: '', email: '' };

    console.log(location.state);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Controlled Component</h1>
            <h2>Display</h2>
            <p>Data submitted from the form:</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    )
}

export default Display
