import { Link,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../redux/actions";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>💓</button>
      ) : (
        <button onClick={handleFavorite}>❤</button>
      )}
      <Link to={`/detail/${props.id}`}>Nombre:{props.name}</Link>
      <h2>Status:{props.status}</h2>
      <h2>Especie:{props.species}</h2>
      <h2>Genero:{props.gender}</h2>
      <h2>Origen:{props.origin}</h2>
      <img src={props.image} alt="" />
      <div>
        { pathname !== "/favorites" ? 
        <button onClick={() => props.onClose(props.id)}>Eliminar</button>
        :''
        }
      </div>
    </div>
  );
}
