import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5002/auth/register', {
        email,
        password
      });
      setMsg('Zarejestrowano! Za chwilę nastąpi przekierowanie do logowania...');
      setSuccess(true);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Błąd rejestracji');
    }
  };

  useEffect(() => {
    if (success) {
      const interval = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            navigate('/login');
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [success, navigate]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Rejestracja</h2>
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
      <button onClick={handleRegister}>Zarejestruj się</button>
      <p>{msg}</p>
      {success && <p>Przekierowanie za {redirectCountdown} sekund...</p>}
    </div>
  );
}

export default Register;
