import { MigrationInterface, QueryRunner } from "typeorm";

export class IncomesEntityUpdated1735830864153 implements MigrationInterface {
    name = 'IncomesEntityUpdated1735830864153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "incomes" RENAME COLUMN "date" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "incomes" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "incomes" ADD "createdAt" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "incomes" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "incomes" ADD "createdAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "incomes" RENAME COLUMN "createdAt" TO "date"`);
    }

}
