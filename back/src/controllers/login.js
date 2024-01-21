const users = require('../utils/users');

function loginU(res,req){
    const { email, password} = req.query;
     // Verificar si hay un usuario con el email y contraseña proporcionados
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Usuario encontrado, devuelve acceso con status 200
    res.status(200).json({ access: true });
  } else {
    // Usuario no encontrado, devuelve acceso falso con status 200
    res.status(200).json({ access: false });
  }
}

export default loginU;