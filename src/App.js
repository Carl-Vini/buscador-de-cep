
import { useState } from 'react';
import './App.css';

function App() {

  const [endereco, setEndereco] = useState({});



  function trocaCep(evento) {
    const cep = evento.target.value;
    setEndereco({ cep })

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/ `)
        .then(resposta => resposta.json())
        .then(dados => {
          setEndereco(enderecoAntigo => ({
            ...enderecoAntigo,
            bairro: dados.bairro,
            cidade: dados.localidade,
            rua: dados.logradouro,
            estado: dados.uf

          }))
        })
    }

  }


  return (
    <div className="App">
      <header className="container">
        <h1 className='title'>Buscador de Endereço</h1>
        <input placeholder='digite aqui seu Cep' onChange={trocaCep} />
        <p> {endereco.cep}</p>
        <p>{endereco.cidade}</p>
        <p>{endereco.estado}</p>
        <p> {endereco.rua}</p>
        <p> {endereco.bairro}</p>
      </header>
    </div>
  );
}

export default App;
