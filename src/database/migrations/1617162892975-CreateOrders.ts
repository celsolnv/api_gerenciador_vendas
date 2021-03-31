import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1617162892975 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"orders",
                columns:[
                    {
                        name:"id",
                        type:"integer",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment"
                    },
                    {
                        name:"id_client" ,
                        type:"integer"
                    },
                    {
                        name:"id_product" ,
                        type:"integer"
                    },
                    {
                        name:"quantity" ,
                        type:"int"
                    },
                    {
                        name:"price" ,
                        type:"double(10,2)"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
    }

}
