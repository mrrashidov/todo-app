exports.up = function (knex) {
  return knex.schema.createTable("roles", function (table) {
    table.increments("id");
    table.integer('user_id').notNullable()
    table.string("name", 50).notNullable();
    table.string("description", 255).nullable();
    table.specificType("status", 'char(1)').defaultTo(1);
    table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("update_at").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("roles");
};
