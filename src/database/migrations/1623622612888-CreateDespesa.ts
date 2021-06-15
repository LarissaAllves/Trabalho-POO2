import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDespesa1623622612888 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "despesas",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "data_compra",
            type: "Date",
          },
          {
            name: "local_compra",
            type: "varchar",
          },

          {
            name: "valor",
            type: "number",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "responsavel_id",
            type: "uuid",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKResponsavel",
            referencedTableName: "responsavel",
            referencedColumnNames: ["id"],
            columnNames: ["responsavel_id"],
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("despesas");
  }
}
