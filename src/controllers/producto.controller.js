const { response } = require('express');
const Producto = require('../models/producto.model');

const addProduct = async (req, res = response) =>{
    try {

        const data = req.body;
        
        const product = new Producto(data);
        await product.save();

        return res.status(200).json({
            status: 200,
            message: 'Producto agregado correctamente'
        });
    } catch (error) {
        return res.status(200).json({
            status: 400,
            message: 'Ocurrio un error al intar agregar el producto'
        });
    }
}

const getProduct = async (req, res = response) =>{
    try {

        const product = await Producto.find();

        return res.status(200).json({
            status: 200,
            data: product,
            message: 'Prodcutos obtenidos correctamente'
        });
    } catch (error) {
        return res.status(200).json({
            status: 400,
            message: 'Ocurrio un error al obtener los productos'
        });
    }
}

const getProductById = async (req, res = response) =>{
    try {

        const id = req.params.id;

        const product = await Producto.findById(id)

        if(!product){
            return res.status(404).json({
                status: 404,
                data:[],
                message: 'No se encontro el producto solicitado'
            });
        }

        return res.status(200).json({
            status: 200,
            data: product,
            message: 'Producto obtenido correctamente'
        });
    } catch (error) {
        return res.status(200).json({
            status: 400,
            message: 'Error al obtener el producto'
        });
    }
}

const updateProduct = async (req, res = response) =>{
    try {

        const id = req.params.id;
        const data = req.body;

        const product = await Producto.findById(id);

        if(!product){
            return res.status(404).json({
                status: 404,
                data:[],
                message: 'No se encontro el producto solicitado'
            });
        }

        await Producto.updateOne({_d: id}, data);

        return res.status(200).json({
            status: 200,
            message: 'Producto actualizado correctamente'
        });

    } catch (error) {
        return res.status(200).json({
            status: 400,
            message: 'Error al actualizar el producto'
        });
    }
}

const deleteProduct = async (req, res = response) =>{
    try {

        const id = req.params.id;

        const product = await Producto.findById(id);

        if(!product){
            return res.status(404).json({
                status: 404,
                message: 'No se encontro el producto solicitado'
            });
        }

        await Producto.deleteOne({_id: id});

        return res.status(200).json({
            status: 200,
            message: 'Producto eliminado correctamente'
        });
        
    } catch (error) {
        return res.status(200).json({
            status: 400,
            message: 'Error al eliminar el producto'
        });
    }
}

module.exports = {
    addProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
}