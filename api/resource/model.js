// build your `Resource` model here
const db = require("../../data/dbConfig.js");

function getAll() {
  return db("resources");
}

function get(filter) {
  return db("resources").where(filter);
}

function add(resource) {
  return db("resources")
    .insert(resource)
    .then(() => {
      return getAll();
    });
}

module.exports = {
  getAll,
  add,
  get,
};
