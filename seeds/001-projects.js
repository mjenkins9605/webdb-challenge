
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {
          name: "Clean gutters", 
          description: "Need to have gutters clear to divert roof water.",
          completed: false
        },
        {
          name: "Cut grass", 
          description: "Grass is getting high and needs to be trimmed.",
          completed: false
        },
        {
          name: "Cut down weeds", 
          description: "Weeds are high in areas that mower can not access.",
          completed: false
        }
      ]);
    });
};
