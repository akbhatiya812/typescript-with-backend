import {Router} from 'express';
import { createOrder,getOrders } from '../controllers/orderController';



const orderRoutes = Router();

orderRoutes.post('/createOrder', createOrder);
orderRoutes.get('/getOrders', getOrders );

export default orderRoutes;
