import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.increments('user_id').primary();
    table.string('username', 50).notNullable();
    table.string('password', 50).defaultTo('');
    table.string('avatar', 50).defaultTo('');
    table.string('name', 30).defaultTo('');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users');
}