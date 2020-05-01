// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('roles', (table: Knex.TableBuilder) => {
    table.increments('role_id').primary();
    table.string('role_code').notNullable();
    table.string('role_detail').notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('roles');
}