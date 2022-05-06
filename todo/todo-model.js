const { where } = require('../data/db-config.js');
const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findByCompletion,
  add,
  update,
  remove,
};

function find() {
  return db('todo');
}

function findById(id) {
  return db('todo').where({ id }).first();
}

function findByCompletion(progress) {
  return db('todo').where({ completed: progress });
}

async function add(task) {
  await db('todo').insert(task);
  return this.find();
}

async function update(id, task) {
  console.log(task);
  await db('todo').where({ id }).update(task);
  return this.findById(id);
}

async function remove(id) {
  await db('todo').delete().where({ id });
  return this.find();
}
