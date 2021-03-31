import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
class Order{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    id_client:number;

    @Column()
    id_product:number;

    @Column()
    quantity:number;

    @Column("double(10,2)")
    price:number;



}

export { Order };
