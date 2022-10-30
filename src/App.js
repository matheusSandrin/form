import './App.css';
import React, { useState, useEffect} from 'react';

function App() {
    const [country, setCountry] = useState([])
    const [city, setCity] = useState([])
 
    useEffect(() => {
      fetch(`https://amazon-api.sellead.com/country`)
      .then((response) => response.json())
      .then((raw) => setCountry(raw));
    }, [])

    useEffect(() => {
      fetch(`https://amazon-api.sellead.com/city`)
      .then((response) => response.json())
      .then((raw) => setCity(raw));
    }, [])

 

  return (
    <>
    <header>Formulário</header>
   <div className="container">
    <div className="cont-a">
      <h1>Dados Pessoais</h1>
      <form>
        <div>
          <label>Nome</label>
          <input type="text" placeholder="Digite seu nome" required />
        </div>

        <div>
          <label>E-mail</label>
          <input type="text" placeholder="Digite seu e-mail" required />
        </div>

        <div>
          <label>Telefone</label>
          <input type="tell" placeholder="Digite seu Telefone" required />
        </div>

        <div>
          <label>CPF</label>
          <input type="text" placeholder="Digite seu CPF" required />
        </div>

      </form>
    </div>
    <div className="cont-b">
      <h1>Destinos de Interesse</h1>
      <form>
      <div>
          <label>Pais</label>
          <select>
            {
              country.map((item, key) => {
                return <option key={key}> {item.name} </option>
              })
            }
          </select>
        </div>

        <div>
          <label>Cidade</label>
            <select>
            {
              city.map((item, key) => {
                return <option key={key}> {item.name} </option>
              })
            }
            </select>
        </div>
      </form>
    </div>
   </div>
   <div className='div-button'>
    <button type="submit" className='button-submit'>Enviar!</button>
   </div>
   </>
  );
}

export default App;
