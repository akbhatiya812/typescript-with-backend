import express from 'express';
import orderRoutes from './order';

const router = express.Router();

router.use('/order', orderRoutes );


export default router;