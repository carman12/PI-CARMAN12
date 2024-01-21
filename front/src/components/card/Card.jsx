import { NavLink, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
//use location me permite saber en que ruta esta parado el usuario, cuando lo ejecutamos lo guardamos en una constante "pathname"

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  const dispatch = useDispatch(); // es un hook q me permite despachar las action

  const myFavorites = useSelector((state) => state.myFavorites); // nos permite seleccionar algo del estado global

  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation(); // devuelve un string dependiendo en q ruta este ej: "/home"

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true),
        dispatch(addFav({ id, name, status, species, gender, origin, image }));
    }
  };

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      // si no le agrego el ? rompe (optional chaining)
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]); // puede estar aca el error (cuando entro a un detalle se me borran los favoritos)

  return (
    <div className="container">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      {pathname !== "/favorites" ? (
        <button onClick={() => onClose(id)}>X</button>
      ) : (
        ""
      )}

      <NavLink to={`/detail/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
