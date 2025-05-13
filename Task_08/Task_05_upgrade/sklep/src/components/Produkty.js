import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Produkty({ dodajDoKoszyka }) {
  const [produkty, setProdukty] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/produkty')
      .then(res => {
        setProdukty(res.data);
      })
      .catch(err => {
        console.error('Błąd przy pobieraniu produktów:', err);
      });
  }, []);

  return (
    <div>
      <h2>Produkty</h2>
      <ul>
        {produkty.map((produkt, i) => (
          <li key={i}>
            {produkt.nazwa} – {produkt.cena} zł
            <button onClick={() => dodajDoKoszyka(produkt)}>Dodaj do koszyka</button> {}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produkty;
