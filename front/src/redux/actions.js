import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character);
      const data = response.data;

      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.error("Error during addFav:", error.message);
      throw error; // Re-lanza el error para que pueda ser manejado en otro lugar si es necesario
    }
  };
};

// ACTION | removeFav
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint, character);
      const data = response.data;

      return dispatch({
        type: "REMOVE_FAV",
        payload: { id },
      });
    } catch (error) {
      console.error("Error during addFav:", error.message);
      throw error; // Re-lanza el error para que pueda ser manejado en otro lugar si es necesario
    }
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
