import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Produkty from './components/Produkty';
import Platnosci from './components/Platnosci';
import Koszyk from './components/Koszyk';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [produktyKoszyka, setProduktyKoszyka] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('token');
    if (saved) setToken(saved);
  }, []);

  const dodajDoKoszyka = (produkt) => {
    setProduktyKoszyka([...produktyKoszyka, produkt]);
  };

  const resetKoszyka = () => {
    setProduktyKoszyka([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        {token ? (
          <Route
            path="/"
            element={
              <div>
                <h1>Sklep</h1>
                <button onClick={() => {
                  localStorage.removeItem('token');
                  setToken(null);
                }}>Wyloguj</button>
                <Produkty dodajDoKoszyka={dodajDoKoszyka} />
                <Koszyk produktyKoszyka={produktyKoszyka} />
                <Platnosci 
                  produktyKoszyka={produktyKoszyka} 
                  resetKoszyka={resetKoszyka} 
                />
              </div>
            }
          />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
