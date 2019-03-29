exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    {
      description: "Insta Clone action description",
      notes: "Insta Clone action notes",
      completed: false,
      project_id: 1
    },
    {
      description: "Another Insta Clone action description",
      notes: "Another Insta Clone action notes",
      completed: false,
      project_id: 1
    },
    {
      description: "Tech Stuff action description",
      notes: "Tech Stuff action notes",
      completed: false,
      project_id: 2
    },
    {
      description: "Another Tech Stuff action description",
      notes: "Another Tech Stuff action notes",
      completed: false,
      project_id: 2
    }
  ]);
};
