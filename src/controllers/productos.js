const Producto = require("../models/productos")

const CtrlProductos = {}

CtrlProductos.getProductos = async (req, res) => {
    try {
        
        return res.json({
            message:"hola desde mongo"
        })

    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }


}

CtrlProductos.postProducto = async (req, res) => {
    try {
        const {
            nombreProducto,
            categoria,
            marca,
            paisOrigen,
            precioUnitario,
            precioMayorista,
            precioOferta

        } = req.body
        if (!nombreProducto || !categoria || !marca  || !paisOrigen) {
            return res.status(400).json({
                message: "La informacion proporcionada es incorrecta"
            })
        }

        const newProducts = new Producto({
            categoria,
            nombreProducto,
            marca,
            paisOrigen,
            precioUnitario,
             precioMayorista,
             precioOferta
            
        })
        const productoRegistrado = await newProducts.save()

        return res.status(201).json({
            message: "el producto  fue registrado con  exito",
            productoRegistrado
        })

    } catch (error) {
        res.status(401).json({
            message: "No se pudo generar el producto",
            errorBody: error.message,
            errorName: error.name
        })
    }
}


module.exports = CtrlProductos