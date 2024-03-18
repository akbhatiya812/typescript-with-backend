import {Router} from 'express';
import { createOrder } from '../controllers/orderController';



const orderRoutes = Router();

orderRoutes.post('/createOrder', createOrder);

export default orderRoutes;
