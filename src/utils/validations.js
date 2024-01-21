const validations = (dataform) => {
    const errors = {};
  
    // Validación del campo de correo electrónico
    if (!dataform.email) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataform.email)) {
      errors.email = 'El formato del correo electrónico es incorrecto';
    } else if (dataform.email.length > 35){
    errors.email = 'El correo electrónico es incorrecto';
    }
  
    // Validación del campo de contraseña
    if (!dataform.password) {
      errors.password = 'La contraseña es obligatoria';
    } else if (dataform.password.length < 6 || dataform.password.length > 10) {
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    } else if (!/\d/.test(dataform.password )){
        errors.password = 'La contraseña debe tener minimo un numero'
    }
  
    // Puedes agregar más validaciones según tus necesidades
  
    return errors;
  };
  
  export default validations;
  