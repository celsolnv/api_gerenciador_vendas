import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
class Client{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name:string;


}

export { Client };
