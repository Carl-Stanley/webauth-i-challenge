const db = require('../../data/db-Config');



module.exports = {
    find,
    findByusername,
    add,
    changeCompletedProperty
  }


  function changeCompletedProperty(task_or_project) {
    /* Changes for completed. 
  if (task_or_project.completed !== 1) {
    task_or_project.completed = false;
  } else {
    task_or_project.completed = true;
  }
  */
  return task_or_project; 
}


function find() {
  return db("users");
}


function findById(username) {
  return db("users").where({ username}).first();
}


function add(users) {
  return db('users', 'username')
  .insert(users)
  //.then(id => findById(...id));
};