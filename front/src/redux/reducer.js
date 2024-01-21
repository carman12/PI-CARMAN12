import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";
import axios from "axios";

const initialState = {
  myFavorites: [], // los filtrados
  allCharacters: [], //va a tener a todos los favoritos, para cuando se filtre no perder todos los favoritos (deberia llamarse allFavorites)
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // REDUCER | ADD_FAV
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case FILTER:
      const filterByGender = [...state.allCharacters].filter((favorite) => {
        return favorite.gender === action.payload;
      });
      return {
        ...state,
        myFavorites: filterByGender,
      };

    case ORDER:
      const favoritesOrdered =
        action.payload === "A"
          ? [...state.myFavorites].sort((a, b) => a.id - b.id)
          : [...state.myFavorites].sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: favoritesOrdered,
      };

      case REMOVE_FAV:
        return { ...state, myFavorites: payload };

    default:
      return { ...state };
  }
};
export default reducer;
