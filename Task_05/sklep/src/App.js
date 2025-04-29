import React, { useState } from 'react';
import Produkty from './components/Produkty';
import Platnosci from './components/Platnosci';
import Koszyk from './components/Koszyk';

function App() {
  const [produktyKoszyka, setProduktyKoszyka] = useState([]);

  const dodajDoKoszyka = (produkt) => {
    setProduktyKoszyka([...produktyKoszyka, produkt]);
  };

  const resetKoszyka = () => {
    setProduktyKoszyka([]);
  };

  return (
    <div>
      <h1>Sklep</h1>
      <Produkty dodajDoKoszyka={dodajDoKoszyka} />
      <Koszyk produktyKoszyka={produktyKoszyka} />
      <Platnosci 
        produktyKoszyka={produktyKoszyka} 
        resetKoszyka={resetKoszyka} 
      /> {}
    </div>
  );
}

export default App;
