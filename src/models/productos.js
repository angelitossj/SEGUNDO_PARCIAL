const {
    Schema,
    model
} = require('mongoose')
const ProductoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true

    },

    paisOrigen: {
        type: String,
        required: true
    },
    precioUnitario: { type: String, required: true },
    precioMayorista: { type: String, required: true },
    precioOferta: { type: String, required: true },
    isActive: {
        type: Boolean,
        default: true

    }







}, {
    versionKey: false,
    timestamps: true
})


module.exports = model("productos", ProductoSchema)