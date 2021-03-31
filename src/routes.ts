import {Router} from 'express';
import { ClientController } from './controllers/ClientController';
import { OrderController } from './controllers/OrderController';
import { ProductController } from './controllers/ProductController';

const router = Router();
const clientController = new ClientController();
const productController = new ProductController();
const orderController = new OrderController();

router.post("/clients",clientController.create);
router.delete("/clients",clientController.delete);
router.get("/clients",clientController.show);

router.post("/products",productController.create);
router.delete("/products",productController.delete)
router.get("/products",productController.show);

router.post("/orders",orderController.create);
router.get("/orders",orderController.show);


export {router}