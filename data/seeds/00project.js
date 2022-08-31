/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("projects").insert([
    {
      project_id: 20,
      project_name: "Testing A New One",
      project_description: "Something something",
    },
  ]);
};
