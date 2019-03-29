exports.seed = function(knex, Promise) {
  return knex("contexts").insert([
    { name: "At Home" },
    { name: "At Work" },
    { name: "At Computer" },
    { name: "Driving" },
    { name: "On Train" },
    { name: "On Bus" }
  ]);
};
