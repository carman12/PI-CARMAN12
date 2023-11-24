import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

export const addFav = (character) => {
  //character=personaje por parametro
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => {
  //id por parametro
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCards = (gender) => {
  //id por parametro
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  //id por parametro
  return {
    type: ORDER,
    payload: orden,
  };
};
