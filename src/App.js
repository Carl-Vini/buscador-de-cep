
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
      <header className="App-header">
        <input placeholder='digite aqui seu Cep' onChange={trocaCep} />
        <h4>Cep: {endereco.cep}</h4>
        <p>Cidade: {endereco.cidade}</p>
        <p>Estado: {endereco.estado}</p>
        <p>Rua: {endereco.rua}</p>
        <p>Bairro: {endereco.bairro}</p>

      </header>
    </div>
  );
}

export default App;
