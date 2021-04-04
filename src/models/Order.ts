import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @Column("double")
    price:number;

}

export { Order };
