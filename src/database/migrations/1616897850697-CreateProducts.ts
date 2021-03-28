import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1616897850697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"products",
                columns:[
                    {
                        name:"id",
                        type:"integer",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment"
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"price_single",
                        type:"double"
                    },
                    {
                       name:"multiple",
                       type:"number"
                    }


                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
