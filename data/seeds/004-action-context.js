exports.seed = function(knex, Promise) {
  return knex("action-context").insert([
    { action_id: 1, context_id: 1 },
    { action_id: 1, context_id: 2 },
    { action_id: 2, context_id: 2 },
    { action_id: 2, context_id: 3 },
    { action_id: 3, context_id: 5 },
    { action_id: 3, context_id: 6 },
    { action_id: 4, context_id: 1 },
    { action_id: 4, context_id: 3 }
  ]);
};
