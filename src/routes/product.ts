import {Router} from 'express';
import { getProducts, getProductById, getProductTypes } from '../controllers/productController';
const productRoutes = Router();


productRoutes.get('/get-products/:collection?',getProducts);
productRoutes.get('/get-product/:productId', getProductById);
productRoutes.get('/get-types', getProductTypes);


export default productRoutes;