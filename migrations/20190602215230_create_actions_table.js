
exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", tbl => {
        tbl
            .increments()
            .unique()

        tbl
            .string("description", 288)
            .notNullable()

        tbl
            .string("notes")
            .notNullable()

        tbl
            .boolean("completed")

        tbl
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
};
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions");
  };
