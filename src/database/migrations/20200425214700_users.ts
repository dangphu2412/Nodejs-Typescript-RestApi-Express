// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.increments('user_id').primary();
    table.string('username', 50).notNullable();
    table.string('password', 50).notNullable();
    table.string('bg_cover');
    table.string('email');
    table.string('facebook');
    table.timestamp('created_at').defaultTo(Date.now());
    table.timestamp('updated_at').defaultTo(Date.now());
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users');
}