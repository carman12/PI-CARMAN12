/*STYLE */
import "./App.css";

/*COMPONENTS TO RENDER */
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
import Detail from "./components/detail/Detail";

/*HOOKS */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

/*DEPENDENCIES */
import axios from "axios";

/*CREDENTIALS */
const EMAIL = "hola@gmail.com";
const PASSWORD = "hola123";
const APIKEY = "pi-cpoloni";

const App = () => {
  const [characters, setCharacters] = useState([]); //[estadolocal, func p/ modificar estado local]
  // function onSearch(id) {
  //   setCharacter([...character, example]);
  // } los "..." es un express operator, hago una copia del arreglo que tengo para no psarlo y le concateno el nuevo elemento
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("Email o password incorrecto");
    }
  };

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  //el use efect siempre tiene q ir con su array de dependencias []

  //ponerle condicional para q no repita tarjeta
  const onSearch = (id) => {
    // LA ENCARGADA DE HACER LA PETICION A LA API
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

  function onClose(id) {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  }
  return (
    //NAV recibe por props la funcion onsearch y se la pasa a Search bar (hacia abajo) search bar realiza el evento onclick y sube hacia arriba buscando quien tiene la ejecucion de la funcion onSearch
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};
// por q  no me muestra el navbar si yo pongo === /

export default App;
