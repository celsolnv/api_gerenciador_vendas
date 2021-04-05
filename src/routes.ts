import {Router} from 'express';
import { ClientController } from './controllers/ClientController';
import { OrderController } from './controllers/OrderController';
import { ProductController } from './controllers/ProductController';

const router = Router();
const clientController = new ClientController();
const productController = new ProductController();
const orderController = new OrderController();

router.get("/",(req,res)=>{
    console.log("Bem vindo a minha aplicação");
    return res.json({"message":"Bem vindo"})
})

router.post("/clients",clientController.create);
router.delete("/clients",clientController.delete);
router.get("/clients",clientController.show);

router.post("/products",productController.create);
router.delete("/products",productController.delete)
router.get("/products",productController.show);

router.post("/orders",orderController.create);
router.get("/orders",orderController.show);
router.get("/orders/:id",orderController.showOneOrder);
router.put("/orders",orderController.update);
router.delete("/orders/:id",orderController.delete);


export {router}