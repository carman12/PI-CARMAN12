import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [], // los filtrados
  allCharacters: [], //va a tener a todos los favoritos, para cuando se filtre no perder todos los favoritos (deberia llamarse allFavorites)
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

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
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => {
          fav.id != action.payload;
        }), //filter retorna un nuevo array. le estamos diciendo q nos vamo a quedar con todos los favortitos cuya id sea distinto que al id del payload (SI UNO DE LOS DATOS ES UN ARRAY Y OTRO UN STRING != no tiene q ser estrictamente distint)
      };

    default:
      return { ...state };
  }
};
export default reducer;
