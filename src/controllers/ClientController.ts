import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../repositories/ClientRepository";

class ClientController{
    async create(request:Request,response:Response){
        
        const {name} = request.body;
        const clientRepository = getCustomRepository(ClientRepository);
        
        const client = clientRepository.create({
           name
        });
            
        await clientRepository.save(client);
        return response.status(201).json(client);

    }
    async delete(request:Request,response:Response){
        const {id} = request.body;
        const clientRepository = getCustomRepository(ClientRepository);

        const client = await clientRepository.findOne({id});

        await clientRepository.remove(client);

        return response.status(204).json(client);

    }
    async show(request:Request,response:Response){
        const clientRepository = getCustomRepository(ClientRepository);

        const client = await clientRepository.find({});

        return response.status(200).json(client);
    }
    

    
}
export {ClientController};