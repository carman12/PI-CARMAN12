import { useState } from "react";
import validation from "../../utils/validation.js";

const Form = (login) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    //validation va retornar un objeto y ese retorno se tiene q guardar en el estado errors
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevendefault si no esta desaparece la informacion y se recarga la pagina
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input
        name="email"
        placeholder="ingrese su email"
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <hr />

      <label htmlFor="text">Password: </label>
      <input
        name="password"
        type="password"
        placeholder="ingrese una password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <button
        type="submit"
        //disabled={!userData.email || !userData.password || errors.email}
      >
        Enviar
      </button>
    </form>
  );
};
export default Form;
