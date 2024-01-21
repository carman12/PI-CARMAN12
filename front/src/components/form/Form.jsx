import { useState, useEffect, useRef } from "react";
import validation from "../../utils/validation.js";
import styles from "./Form.module.css";
import ojoAbierto from "./Utilidades.css?inline";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError(
      validation({
        ...userData,
        [name]: value,
      })
    );

    // Ajustar el ancho del input basado en el tamaño del texto ingresado
    if (name === "email" && emailInputRef.current) {
      emailInputRef.current.style.width =
        value === "" ? "auto" : `${emailInputRef.current.scrollWidth}px`;
    } else if (name === "password" && passwordInputRef.current) {
      passwordInputRef.current.style.width =
        value === "" ? "auto" : `${passwordInputRef.current.scrollWidth}px`;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <div id={styles.rickAndMortyContainer}>
        <div id={styles.rickAndMortyText}>Rick y Morty</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form>
          <div>
            <label>CORREO ELECTRONICO: </label>
            <input
              ref={emailInputRef}
              type="email"
              name="email"
              value={userData.email}
              placeholder="Ingrese su correo electronico"
              onChange={handleChange}
            />
            <p>{error.email}</p>
          </div>
          <div>
            <div style={{ position: "relative" }}>
              <label>CONTRASEÑA: </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={userData.password}
                placeholder="Ingrese su contraseña"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10.2%",
                  top: "70%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                }}
              >
                {showPassword ? (
                  "👁️"
                ) : (
                  <img
                    src={ojoAbierto}
                    //alt="Mostrar/ocultar contraseña"
                    style={{ height: "20px" }}
                  />
                )}
              </button>
            </div>
            <p>{error.password}</p>
          </div>
          <div>
            <button
              type="submit"
              /*disabled={Object.values(error).some((errors) => errors)}*/
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
