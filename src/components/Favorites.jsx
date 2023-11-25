import { useSelector,useDispatch } from "react-redux";
import Cards from "./Cards";
import { filterCards,orderCards } from "../redux/actions";
import { useState } from "react";


const Favorites = () => {
  const [aux,setAux] = useState(false)
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);

  /*const handlerOrder =(event) =>{
    dispatch(orderCards(event.target.value))
  }*/
  const handlerChange =(event) =>{
    event.target.name === "filter" ?
    dispatch(filterCards(event.target.value))
    :
    dispatch(orderCards(event.target.value));
    setAux(true);
    
  }

  return (
    <div>
      <div>
      <select name="order" onChange={handlerChange}>
        <option value="A">Ascendete</option>
        <option value="D">Descendente</option>
      </select>
      <select name="filter" onChange={handlerChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      </div>
      <Cards characters={myFavorites} />
    </div>
  );
};
export default Favorites;
