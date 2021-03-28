import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repositories/ProductRepository";

class ProductController{
    async create(request:Request,response:Response){

        const {name,price_single,multiple} = request.body;

        const productRepository = getCustomRepository(ProductRepository);

        const product = productRepository.create({
            name,price_single,multiple
        })

        await productRepository.save(product);

        return response.status(201).json(product);
    }
    async delete(request:Request,response:Response){
        const {id} = request.body;
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne({id});

        await productRepository.remove(product);

        return response.status(204).json(product);

    }
    async show(request:Request,response:Response){

        const productRepository = getCustomRepository(ProductRepository);

        const products = await productRepository.find({})

        return response.json(products);

    }

}

export {ProductController}