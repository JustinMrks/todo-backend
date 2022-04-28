/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('todo', (tbl) => {
    tbl.increments();
    tbl.string('item', 256).notNullable();
    tbl.string('description', 512).notNullable();
    tbl.boolean('completed').defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('todo');
};
