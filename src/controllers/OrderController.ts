import { Request, Response } from "express";
import { OrderRepository } from "../repositories/OrderRepository";

class OrderController{
    async create(request:Request,response:Response){
        const {id_client,id_product,price,quantity} = request.body;

        const orderRepository = new OrderRepository();

        const order = orderRepository.create({
            id_client,id_product,price,quantity
        });

        await orderRepository.save(order);

        return response.status(201).json(order);

    }
    async show(request:Request,response:Response){
        const orderRepository = new OrderRepository();

        const orders = await orderRepository.find({});

        return response.status(201).json(orders);

    }
}

export { OrderController };
