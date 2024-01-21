import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type";

const initalState = {
  myFavorites: [],
  allFavorites: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allFavorites, action.payload],
        allFavorites: [...state.allFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((character) => {
          return character.id != action.payload;
        }),
      };
    case FILTER:
      const filterByGender = [...state.allFavorites].filter((favorites) => {
        return favorites.gender === action.payload;
      });
      return {
        ...state,
        myFavorites: filterByGender,
      };

    case ORDER:
      const favoritesByOrder = [...state.myFavorites].sort((a, b) =>
        action.payload === "A" ? a.id - b.id : b.id - a.id
      );
      return {
        ...state,
        myFavorites: favoritesByOrder,
      };

    default:
      return { ...state };
  }
};
export default reducer;
