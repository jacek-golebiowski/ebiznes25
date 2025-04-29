import React, { useState } from 'react';
import axios from 'axios';

function Platnosci({ produktyKoszyka = [], resetKoszyka }) {
  const [dane, setDane] = useState({ imie: '', kwota: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const obliczSumeKoszyka = () => {
    if (!Array.isArray(produktyKoszyka)) {
      return 0;
    }
    return produktyKoszyka.reduce((total, produkt) => total + produkt.cena, 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sumaKoszyka = obliczSumeKoszyka();
    const kwota = parseFloat(dane.kwota);

    if (produktyKoszyka.length === 0) {
      setError('Koszyk jest pusty, dodaj produkty.');
      return;
    }

    if (isNaN(kwota) || kwota <= 0 || kwota !== parseFloat(sumaKoszyka)) {
      setError(`Kwota musi być równa pełnej sumie w koszyku (${sumaKoszyka} zł).`);
      return;
    }

    setError('');
    setMessage('');

    try {
      const res = await axios.post('http://localhost:5001/platnosci', { ...dane, kwota });
      
      console.log('Odpowiedź z serwera:', res.data);

      setMessage(`Płatność od ${dane.imie} na kwotę ${kwota} zł została przetworzona.`);

      resetKoszyka();
    } catch (err) {
      console.error('Błąd przy wysyłaniu płatności:', err.response ? err.response.data : err.message);
      setError('Nie udało się wysłać płatności. Spróbuj ponownie.');
    }
  };

  return (
    <div>
      <h2>Płatności</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <input
          type="text"
          placeholder="Imię"
          value={dane.imie}
          onChange={e => setDane({ ...dane, imie: e.target.value })}
        />
        <input
          type="number"
          placeholder="Kwota"
          value={dane.kwota}
          onChange={e => setDane({ ...dane, kwota: e.target.value })}
        />
        <button type="submit">Zapłać</button>
      </form>
    </div>
  );
}

export default Platnosci;
