// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('user_role', (table: Knex.TableBuilder) => {
    table.increments('user_role_id').primary();
    table.integer('user_id');
    table.foreign('user_id').references('users');
    table.integer('role_id');
    table.foreign('role_id').references('roles');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('user_role');
}