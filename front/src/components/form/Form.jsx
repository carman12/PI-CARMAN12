import { useState, useEffect } from "react";
import validation from "../../utils/validation.js";

const Form = ({ login }) => {
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
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevenDefault evitamos que se recarue la pagina
    login(userData);
  };

  useEffect(() => {
    if (userData.email !== "" || userData.password !== "") {
      setErrors(validation(userData));
    }
  }, [userData]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: </label>
      <input
        type="email"
        name="email"
        placeholder="ingrese su email"
        value={userData.email}
        onChange={handleChange}
      />
      <p>{errors.email}</p>
      <hr />

      <label>Password: </label>
      <input
        name="password"
        type="password"
        placeholder="ingrese una password"
        value={userData.password}
        onChange={handleChange}
      />
      <p>{errors.password}</p>

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
