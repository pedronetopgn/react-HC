import React from 'react';
import Routes from './routes';

import './style.css';

function App() {
  //const [usuario, setUsuario] = useState('');
  /*
  //Requisição para a api do github
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(
      response => console.log(response)
    );
  }

  function handleChange(event){
    setUsuario(event.target.value);
  }
  */
  return (
    <Routes />
  );
}

export default App;
