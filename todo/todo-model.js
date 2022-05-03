const { where } = require('../data/db-config.js');
const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findByUserId,
  add,
  update,
  remove,
  fetchTypes,
  findBy,
  getAttending,
  joinClass,
  leaveClass,
  filterBy,
};
