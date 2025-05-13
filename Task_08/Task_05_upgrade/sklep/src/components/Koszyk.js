import React from 'react';

function Koszyk({ produktyKoszyka }) {
  const obliczSumeKoszyka = () => {
    if (!Array.isArray(produktyKoszyka)) {
      return 0;
    }
    return produktyKoszyka.reduce((total, produkt) => total + produkt.cena, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Koszyk</h2>
      <ul>
        {produktyKoszyka.map((produkt, index) => (
          <li key={index}>
            {produkt.nazwa} – {produkt.cena} zł
          </li>
        ))}
      </ul>
      <p>Suma: {obliczSumeKoszyka()} zł</p>
    </div>
  );
}

export default Koszyk;
