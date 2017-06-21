'use strict';
module.exports = function(app) {
  var expensesList = require('../controllers/controller');


  // expensesList Routes
  app.route('/tasks')
    .get(expensesList.list_all_tasks)
    .post(expensesList.create_a_task);


  app.route('/tasks/:taskId')
    .get(expensesList.read_a_task)
    .put(expensesList.update_a_task)
    .delete(expensesList.delete_a_task);
};
