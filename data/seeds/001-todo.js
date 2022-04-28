exports.seed = function (knex) {
  return knex('todo').insert([
    {
      item: 'Find out how to make this shit work',
      description: 'Google I guess????',
      completed: 1,
    },
    {
      item: 'Build out a portfolio',
      description: 'More projects, with some routing',
      completed: 0,
    },
    {
      item: 'Get some bitches',
      description: 'Yeah man dont ask me',
      completed: 0,
    },
    {
      item: 'Get a job',
      description: 'Thanks Will',
      completed: 0,
    },
  ]);
};
