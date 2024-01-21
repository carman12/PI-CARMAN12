let myFavorites = [];

function postFav(req, res) {
  const { character } = req.body;
  myFavorites.push(character);
  // Devuelve el arreglo de favoritos en formato JSON
  res.json(myFavorites);
}
function deleteFav(req, res) {
  const { id } = req.params;

  myFavorites = myFavorites.filter((character) => character.id !== id);
  res.json(myFavorites);
}

export default {
  postFav,
  deleteFav,
};
