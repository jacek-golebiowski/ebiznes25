import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5002/auth/login', {
        email,
        password
      });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      setMsg('Zalogowano!');
      navigate('/');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Błąd logowania');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Logowanie</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
      <button onClick={handleLogin}>Zaloguj się</button>
      <p>{msg}</p>
      <p>
        Nie masz konta? <Link to="/register">Zarejestruj się</Link>
      </p>
    </div>
  );
}

export default Login;
