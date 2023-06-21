const express = require('express');
const router = express.Router();
const productModel = require('../models/product');


const {getProductos,postProducto}=require("../controllers/productos")


router.get("/mongolo",getProductos)
router.post("/mongolo",postProducto)

// Obtener todos los productos
router.get('/product', async (req, res) => {
  try {
    const productos = await productModel.getAllProductos();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Insertar un nuevo producto
router.post('/product', async (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    res.status(400).json({ error: 'Se requiere nombre y precio del producto' });
  } else {
    try {
      const resultado = await productModel.insertarProducto(nombre, precio);
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
});

// Eliminar un producto por su ID
router.delete('/product/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const resultado = await productModel.eliminarProducto(id);
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Actualizar un producto por su ID
// Controlador para actualizar productos
// Controlador para actualizar productos
router.put('/productos/product/:id', async (req, res) => {
  const id = req.params.id;
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    res.status(400).json({ error: 'Se requiere nombre y precio del producto' });
  } else if (!id) {
    res.status(400).json({ error: 'Se requiere el ID del producto' });
  } else {
    try {
      const resultado = await productModel.actualizarProducto(id, nombre, precio);
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
});

router.get('/ping', async(req, res)=>{
  console.log("Esperando conexion")
    let conn;
    try {
  
  	conn = await pool.getConnection();
  return res.json(conn.getResponse);
    }catch(e){
      console.log(e)
      return res.status(404).json({message: 'Connection error'});
    }
})

module.exports = router;
