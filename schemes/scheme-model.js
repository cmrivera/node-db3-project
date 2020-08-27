const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  findSteps,
  update,
  remove,
};

//for get router to find alll schemes
function find() {
  return db("schemes");
}

//for get router to find scheme by Id
function findById(id) {
  return db("schemes").where({ id }).first();
}

//For router.post to add a new scheme
function add(schemeData) {
  return db("schemes").insert(schemeData);
}

//router.get for steps of the schemes
//join schemes and steps of schemeid
function findSteps(id) {
  return db("steps as s")
    .join("schemes as k", "k.id", "s.scheme_id")
    .select("s.id", "k.scheme_name", "s.step_number", "s.instructions")
    .orderBy("s.step_number")
    .where({ scheme_id: id });
}

//router.put to update scheme. find scheme with id then update.
function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then((count) => {
      return findById(id);
    });
}

//router.delete request to find scheme with id and then delete
function remove(id) {
  return db("schemes").where({ id }).del();
}
//fix and debug
