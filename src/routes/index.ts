import express from 'express';
import orderRoutes from './order';
import productRoutes from './product';

const router = express.Router();

router.use('/order', orderRoutes );
router.use('/product', productRoutes);

export default router;