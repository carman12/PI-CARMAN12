const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rym2.up.railway.app/api/character/${id}?key=pi-cpoloni`) // ver esta url
    .then(({ data }) => {
      const character = {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
      }; // pongo return para que la ejecucion corte una vez que de la respuesta
      res.writeHead(200, { "Content-type": "aplication/json" });
      return res.end(JSON.stringify(character));
    })
    //.catch ((error)=>{ throe Error(error.message)})
    .catch((error) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      return res.end(error.message);
    });
};

module.exports = getCharById;
