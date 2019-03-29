exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table
        .string("name", 128)
        .notNullable()
        .unique();
      table.string("description", 256).notNullable();
      table.boolean("completed");
    })
    .createTable("actions", table => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .string("description", 256)
        .notNullable()
        .unique();
      table.string("notes", 256).notNullable();
      table.boolean("completed");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions").dropTableIfExists("projects");
};