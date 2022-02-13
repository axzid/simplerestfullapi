import product from "../models/product.js";

// melihat semua data 
export const getProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }
}
// menambahkan data 
export const saveProduct = async (req, res) => {
    const Product = new product(req.body);
    try {
        const savedproduct = await Product.save();
        res.json(savedproduct);
     } catch (error){
        res.json({message: error.message});
     }
}
// mengubah data
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.json(updatedProduct);
    } catch (error) {
        res.json({message: error.message});
    }
}

// menghapus data
export const deleteProduct = async (req, res) => {
    try {
        const removedProduct = await product.remove({_id: req.params.id});
        res.json(removedProduct);
    } catch (error) {
        res.json({message: error.message});
    }
}
