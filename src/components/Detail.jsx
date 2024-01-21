import { useParams } from "react-router-dom";
import axios from "axios";
import { useState , useEffect } from "react";
const APY_KEY = "pi-carman12";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(
      `"http://localhost:3001/rickandmorty/character/${id}"`
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
   setCharacter({});
  }, [id]);

  return  character.name ? (
    <div>
      <h1>Detalles del Personaje con ID: {id}</h1>
         <h2>Nombre:{character.name}</h2>
         <h2>Status:{character.status}</h2>
         <h2>Especie:{character.species}</h2>
         <h2>Genero:{character.gender}</h2>        
         <h2>Origen:{character.origin?.name}</h2>        
         <img src={character.image} alt='' /> 
      </div>
  ) : <h1>Cargando...</h1>
};

export default Detail;
