import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState([]); //[estadolocal, func p/ modificar estado local]
  // function onSearch(id) {
  //   setCharacter([...character, example]);
  // } los "..." es un express operator, hago una copia del arreglo que tengo para no psarlo y le concateno el nuevo elemento
  const APIKEY = "pi-cpoloni";

  //ponerle condicional para q no repita tarjeta
  const onSearch = (id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    //NAV recibe por props la funcion onsearch y se la pasa a Search bar (hacia abajo) search bar realiza el evento onclick y sube hacia arriba buscando quien tiene la ejecucion de la funcion onSearch
    <>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<h1>Bienvenidos</h1>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};
export default App;
