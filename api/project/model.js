// build your `Project` model here

const db = require("../../data/dbConfig.js");

function getAll() {
  return db("projects");
}

async function add(project) {
  return db("projects")
    .insert(project)
    .then(() => {
      return getAll();
    });
}

module.exports = {
  getAll,
  add,
};
