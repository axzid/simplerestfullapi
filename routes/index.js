import express from "express";
import { getProducts , saveProduct, updateProduct, deleteProduct} from "../controller/productController.js";

const router = express.Router();

//routing
router.get("/", getProducts);
router.get("/:id");

router.post("/", saveProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
