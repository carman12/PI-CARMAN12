import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Error404 from "./components/Error/Error.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import SearchBar from "./components/searchbar/SearchBar.jsx";
/*HOOKS */
import { useState, useEffect, useMemo } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

/*DEPENDENCIES */
import axios from "axios";

/*CREDENTIALS */
const APY_KEY = "pi-carman12";

const App = () => {
  const navigate = useNavigate();
  const [char, setChar] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = "mail@mail.com";
  const PASSWORD = "hola123";

  async function login(userData) {
    try{
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    const response = await axios.get(`${URL}?email=${email}&password=${password}`);
    if(response.data.email === EMAIL && response.data.password === PASSWORD){
    const { access } = response.data;
    setAccess(response.data);
    }

    if (access) {
      navigate("/home");
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    // Manejar el error según tus necesidades
  }
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }
  //el use efect siempre tiene q ir con su array de dependencias []

  //ponerle condicional para q no repita tarjeta
  async function onSearch(id) {
    try {
      // Utilizamos la API para consultar
      const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
      const data = response.data;
  
      if (data.name) {
        const isCharacterDuplicate = char.some((character) => character.id === data.id);
  
        if (!isCharacterDuplicate) {
          setChar((oldChars) => [...oldChars, data]);
        } else {
          window.alert("Este personaje ya ha sido agregado a la lista.");
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error("Error during onSearch:", error.message);
      // Manejar el error
      window.alert("Hubo un error al buscar el personaje. Por favor, inténtalo de nuevo.");
    }
  }

  const onClose = (id) => {
    const updatedCharList = char.filter((character) => character.id !== id);
    // Actualizamos el estado de char con la nueva lista
    setChar(updatedCharList);
  };
  // useEffect(() => {
  //   // Verifica la condición de acceso y navega en consecuencia
  //   if (!access) {
  //     navigate("/");
  //   }
  // }, [access, navigate]);
  
 useMemo(() => {
  !access && navigate("/");
 }, [access]);

  return (
    //NAV recibe por props la funcion onsearch y se la pasa a Search bar (hacia abajo) search bar realiza el evento onclick y sube hacia arriba buscando quien tiene la ejecucion de la funcion onSearch
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/home"
          element={
            <div className="App">
              <Cards characters={char} onClose={onClose} />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
