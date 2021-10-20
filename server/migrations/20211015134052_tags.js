exports.up = function (knex) {
  return knex.schema.createTable("tags", function (table) {
    table.increments("id");
    table.integer('user_id').notNullable()
    table.specificType("status", 'char(1)').defaultTo(1);
    table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("update_at").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tags");
};
