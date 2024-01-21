import { useSelector, useDispatch } from "react-redux";
import Cards from "../cards/Cards";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

// Asumiendo que la parte específica que necesitas es "myFavorites"
//const selectFavorites = (state) => state.myFavorites; 

const Favorites = () => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const { myFavorites } = useSelector((state) => state);
  // Utiliza el selector modificado
  //const myFavorites = useSelector(selectFavorites);

  const handleChange = (event) => {
    if (event.target.name === "order") {
      dispatch(orderCards(event.target.value)); // value es A o D
    } else {
      dispatch(filterCards(event.target.value));
      setAux(true);
    }
  };

  return (
    //en vez de hacer el map puedo importar Cards y pasar entre <di> solamente:
    // <Cards characters={myFavorites}/>
    <div>
      <select name="order" onChange={handleChange}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name="filter" onChange={handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <Cards characters={myFavorites} />
    </div>
  );
};

export default Favorites;
