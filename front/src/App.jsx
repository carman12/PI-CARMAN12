import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "./components/form/Form";

const EMAIL = "cintia.poloni@gmail.com";
const PASSWORD = "hola12";

const App = () => {
  const [characters, setCharacters] = useState([]); //[estadolocal, func p/ modificar estado local]
  // function onSearch(id) {
  //   setCharacter([...character, example]);
  // } los "..." es un express operator, hago una copia del arreglo que tengo para no psarlo y le concateno el nuevo elemento
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const APIKEY = "pi-cpoloni";
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  //el use efect siempre tiene q ir con su array de dependencias []

  //ponerle condicional para q no repita tarjeta
  const onSearch = (id) => {
    if (characters.some((character) => character.id === Number(id))) {
      window.alert("El personaje ya ha sido agregado");
    } else {
      axios(
        `https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`
      ).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    //NAV recibe por props la funcion onsearch y se la pasa a Search bar (hacia abajo) search bar realiza el evento onclick y sube hacia arriba buscando quien tiene la ejecucion de la funcion onSearch
    <div className="App">
      {pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};
// por q  no me muestra el navbar si yo pongo === /

export default App;
