const { where } = require('../data/db-config.js');
const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findByCompletion,
  add,
  update,
  toggleCompletion,
  remove,
};

function find() {
  return db('todo');
}

function findById(id) {
  return db('todo').where({ id });
}

function findByCompletion(progress) {
  return db('todo').where({ completed: progress });
}

async function add(task) {
  await db('todo').insert(task);
  return this.find();
}

async function update(id, task) {
  await db('todo').where({ id }).update(task);
  result = this.findById(id);
  return result;
}

async function toggleCompletion(id) {
  const old = await db('todo').where({ id }).first();
  let newComp = 0;
  if (old.completed == 0) newComp = 1;
  return update(id, { ...old, completed: newComp });
}

function remove(id) {
  return db('todo').delete().where({ id });
}
