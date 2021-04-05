import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../repositories/ClientRepository";
import { OrderRepository } from "../repositories/OrderRepository";
import { ProductRepository } from "../repositories/ProductRepository";

class OrderController{
    async create(request:Request,response:Response){
        const {id_client,id_product,price,quantity} = request.body;

        const orderRepository = getCustomRepository(OrderRepository);

        const order = orderRepository.create({
            id_client,id_product,price,quantity
        });

        await orderRepository.save(order);

        return response.status(201).json(order);

    }
    async update(request:Request,response:Response){
        const {id,id_client,id_product,price,quantity} = request.body;

        const orderRepository = getCustomRepository(OrderRepository);

        const order = orderRepository.create({
            id,id_client,id_product,price,quantity
        });

        await orderRepository.save(order);

        return response.status(201).json(order);

    }
    async delete(request:Request,response:Response){
        const {id} = request.body;
        const orderRepository = getCustomRepository(OrderRepository);

        const order = await orderRepository.findOne({id});

        await orderRepository.remove(order);

        return response.status(204).json(order);

    }
    async show(request:Request,response:Response){
        const orderRepository = getCustomRepository(OrderRepository);
        const clientRepository = getCustomRepository(ClientRepository);
        const productRepository = getCustomRepository(ProductRepository);

        const orders = await orderRepository.find({});
        const results =  orders.map( async (order)=>{
            let client  = await clientRepository.find({where:{id:order.id_client}})
            let product = await productRepository.find({where:{id:order.id_product}})
            var result = {
                "id":order.id,
                "name_product":product[0].name,
                "name_client":client[0].name,
                "quantity":order.quantity,
                "price":order.price,
            }
            return result
        });
        (async () => {
            const orders_json = await Promise.all(results);
            return response.status(202).json(orders_json);

        })();;
    }
    async showOneOrder(request:Request,response:Response){
        const id_order = request.params.id;
        const orderRepository = getCustomRepository(OrderRepository);
        const clientRepository = getCustomRepository(ClientRepository);
        const productRepository = getCustomRepository(ProductRepository);

        const orders = await orderRepository.find({where:{id:id_order}});
        const results =  orders.map( async (order)=>{
            let client  = await clientRepository.find({where:{id:order.id_client}})
            let product = await productRepository.find({where:{id:order.id_product}})
            var result = {
                "order":orders[0],
                "client":client[0],
                "product":product[0]
            }
            return result
        });
        (async () => {
            const orders_json = await Promise.all(results);
            return response.status(202).json(orders_json);

        })();;
    }

}

export { OrderController };
