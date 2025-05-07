import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from './services/axiosClient'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await loginUser({ email, password });
        localStorage.setItem("jwtToken", res.data.token);
        navigate("/profile");
    };

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login
