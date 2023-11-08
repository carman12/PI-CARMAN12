import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value); // para obtener el valor que el usuario esta escribiento en pantalla utilizoo event(un objeto gigante con mil propiedades)a mi me intereza solo TARGET(otro objeto con mil propiedades) y solo me interesa VALUE
  };
  return (
    <div>
      <input type="search" onChange={handleChange} value={id} />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
    </div>
  );
  //los EVENTOS van hacia arriba, se dispara en evento(onSearch) haciendo click y va hacia arriba buscando quien tiene la ejecucion de esa funcion(app.jsx) para q la ejecute
  //voy guardando el value={id}en input, el estado, va a irr cambiando "EL ESTADO TINE Q SER IGUAL AL INPUT", por eso el value tiene que ser igual a ID
}
// en input le paso el atriburto onChage, es un vevento(q en el imput en ez de llamarse onClick se llama onChange) anet un cambio ejecuta handleChange

//dentro de button, cuando hacemos onClick tenemos q ejecutar onSearch denrtro de otra funcion(call back) porq si lo hago directo: onClick={onSearch(id)} se v a ejecutar cuando lea el codigo y yo solo necesito q se ejecute cuando hagan click, por eso s elo paso dentro de otra funcion
