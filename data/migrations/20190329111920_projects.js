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
    })
    .createTable("contexts", table => {
      table.increments();
      table
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("action_context", table => {
      table.increments();
      table
        .integer("action_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("actions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("context_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("contexts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("action_context")
    .dropTableIfExists("contexts")
    .dropTableIfExists("actions")
    .dropTableIfExists("projects");
};
