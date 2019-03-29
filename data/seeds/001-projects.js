exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      name: "Insta-Clone",
      description:
        "Create a fully functional instagram clone, including a backend with CRUD functionality",
      completed: false
    },
    {
      name: "My Tech Stuff",
      description:
        "Finish adding in touch ups to my tech stuff build week project, including styling and reducer refactoring",
      completed: true
    }
  ]);
};
