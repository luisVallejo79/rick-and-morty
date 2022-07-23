import rickmorty from "../src/img/rick-morty.png"
import './App.css';
import { useState } from 'react';
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async() =>{
    const api = await fetch("https://rickandmortyapi.com/api/character");
    //console.log("api result", api);
    const characterApi = await api.json();
    //setiar el state pasando por argumento solo lo que queremos mostrar
    setCharacters(characterApi.results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        { characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/> 
        ) : (
          <><img src={ rickmorty } alt="Rick & Morty" className="img-home" ></img>
          <button onClick={ reqApi } className="btn-search">SEARCH</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
