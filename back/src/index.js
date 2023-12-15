const http = require("http");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;

//data lo estoy pidiendo de la carpeta

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //esta linea le da permiso al front end para q haga peticiones, despues d ela coma le pones a quien le das acceso, si es * todos, si es localhost:3000 solo a mi front
    //if (req.url.includes("/rickandmorty/character")) {
    //const id = req.url.split("/").at(-1);
    const url = req.url;

    if (url.includes("/rickandmorty/character")) {
      id = Number(url.split("/").pop());

      // spliteamos separando desde las barras y hacemos at -1 para quedarnos con el ultimo valor q es el ID
      getCharById(res, id);
    }
  })
  .listen(PORT, "localhost");

//el req(request) nos permite crear rutas en nuetro srvidor

// getCharById.js es un controlador (los controladores son funciones que se encargan de la parte logica de la ruta y de dar la respuesta en base a la logica que trabajo)
//si vamos al aarchivo getCharById.js vamos a ver q el controlador es el q se encarga de hacerle la peticion a la api, quien se encarga de quedarse con los datos y dar la respeusta final
