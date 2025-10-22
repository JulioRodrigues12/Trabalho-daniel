/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
    .createTable('produtos', (table) => {
    table.increments('id').primary();
    table.string('mongo_id', 24).notNullable().unique();
    table.string('nome', 100).notNullable();
    table.decimal('preco', 10, 2).notNullable();
    table.integer('estoque').unsigned().notNullable();
    table.string('marca', 100).notNullable();
    });
    
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .dropTable('produtos');
}
