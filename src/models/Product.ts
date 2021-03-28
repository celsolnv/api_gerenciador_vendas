import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
class Product{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column("double")
    price_single:number;

    @Column()
    multiple:number;

}

export {Product}