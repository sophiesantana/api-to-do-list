import { MigrationInterface, QueryRunner } from "typeorm";

export class TodoList1722970793302 implements MigrationInterface {
    name = 'TodoList1722970793302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo-list" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "done" boolean NOT NULL, CONSTRAINT "PK_45bb5da8cc53815d58f810dd2d4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo-list"`);
    }

}
