import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnCreatedAtAndUpdatedAt1723044525295 implements MigrationInterface {
    name = 'AddColumnCreatedAtAndUpdatedAt1723044525295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo-list" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "todo-list" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo-list" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "todo-list" DROP COLUMN "createdAt"`);
    }

}
