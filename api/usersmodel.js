const db = require('../data/db-Config');



module.exports = {
    find,
    findByusername,
    add,
    changeCompletedProperty,
    findByusernamepassword   
  }

  function changeCompletedProperty(username) {
    /* Changes for completed. 
  if (task_or_project.completed !== 1) {
    task_or_project.completed = false;
  } else {
    task_or_project.completed = true;
  }
  */
  return username; 
}

function find() {
  return db("users");
}


function findByusername(username) {
  return db("users").where({ username}).first();
}

function findByusernamepassword(username,password) {
    return db("users").where({ username,password}).first();
  }



function add(users) {
  return db('users', 'username')
  .insert(users)
  //.then(id => findById(...id));
};