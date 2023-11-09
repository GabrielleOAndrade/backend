/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tab_lista', (t) =>{
    t.increments();
    t.string('nome', 100).notNull().unique();
    t.string('numero', 100).notNull();
    t.string('email', 100).notNull();
    t.string('endereço', 200).notNull();
    t.date('data_nascimento', 20).notNull();
    t.string('foto', 100).notNull();

    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
