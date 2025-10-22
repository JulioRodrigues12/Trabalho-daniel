/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('pedidos', (table) => {
    table.increments('id').primary();
    table.string('mongo_id', 24).notNullable().unique();
    table.date('data_pedido').notNullable();
    table.integer('id_cliente').notNullable().unique()
    table.decimal('valor_total', 10, 2).notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable('pedidos');
}
