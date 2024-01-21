import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Error404 from "./components/Error404.jsx";
import Forms from "./components/Forms.jsx";
import Favorites from "./components/Favorites.jsx";
const APY_KEY = "pi-carman12";
function App() {
  const navigate = useNavigate();
  const [char, setChar] = useState([]);
  const [access,setAccess] = useState(false)
  const EMAIL = 'mail@mail.com'
  const PASSWORD = 'hola123'


function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }else {
    window.alert('Datos erroneos')
   }
}
function logout (){
  setAccess(false);
  navigate('/')
}

  function onSearch(id) {
    axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    ).then(({ data }) => {
      if (data.name) {
        const isCharacterDuplicate = char.some((char) => char.id === data.id);

        if (!isCharacterDuplicate) {
          setChar((oldChars) => [...oldChars, data]);
        } else {
          window.alert("Este personaje ya ha sido agregado a la lista.");
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  const onClose = (id) => {
    const updatedCharList = char.filter((character) => character.id !== id);
    // Actualizamos el estado de char con la nueva lista
    setChar(updatedCharList);
  };

  useMemo(() => {
    !access && navigate('/');
 }, [access]);

 

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
        <Route path="/" element={<Forms  login={login}/>} />
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
}

export default App;
