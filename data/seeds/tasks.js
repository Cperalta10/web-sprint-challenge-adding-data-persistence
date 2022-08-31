/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      task_id: 1,
      task_description: "A random Task",
      task_notes: "Something about this task",
      project_id: 10,
    },
    {
      task_id: 2,
      task_description: "Another random Task",
      task_notes: "Something else about task",
      project_id: 10,
    },
  ]);
};
