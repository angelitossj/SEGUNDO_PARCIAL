const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '192.168.5.2', // Reemplaza con la dirección IP o el nombre de host del contenedor de MariaDB
  user: 'root', // Reemplaza con el nombre de usuario de tu base de datos
  password: 'angelito', // Reemplaza con la contraseña de tu base de datos
  database: 'productos', // Reemplaza con el nombre de tu base de datos
  connectionLimit: 5, // Límite de conexiones en el pool
});



module.exports = pool;
