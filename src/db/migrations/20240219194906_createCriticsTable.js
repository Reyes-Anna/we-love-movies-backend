
exports.up = function(knex) {
  return knex.schema.createTable("critics", (table) => {
    table.increments("critic_id").primary();
    table.string("preferred_name");
    table.string("surname");
    table.string("organization_name");
    table.timestamp("created_at");
    table.timestamp("updated_at")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("critics")
};
