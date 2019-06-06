
exports.seed = function(knex, Promise) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        {
          description: "Use a ladder and clean out gutters, be sure to have gloves to make easier.",
          notes: "borrow a ladder", 
          completed: false,
          project_id: 1
        },
        {
          description: "Fill mower with gas and mow grass at set height for mowing deck.",
          notes: "get gas", 
          completed: false,
          project_id: 2
        },
        {
          description: "Cleanup weeds around the house and other areas that mower is to big to fit.",
          notes: "need new safety glasses", 
          completed: false,
          project_id: 3
        }
      ]);
    });
};
