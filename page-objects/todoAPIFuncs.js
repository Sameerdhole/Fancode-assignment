// page-objects/todoApi.js
const pactum = require("pactum");

class TodoApiFuncs {
  constructor() {
    this.spec = pactum.spec();
    this.todos = [];
  }

  /**
   * Fetches all todos for a specific user by user ID and stores them in `this.todos`.
   * @async
   * @param {number} userId - The ID of the user.
   * @returns {Promise<Array>} A promise that resolves to an array of todo objects for the user.
   */
  async getTodosByUserId(userId) {
    this.spec.get(`http://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const response = await this.spec.toss();
    this.todos = response.json;
    return this.todos;
  }

  /**
   * Calculates the percentage of completed tasks from the fetched todos.
   * @returns {number} The completion percentage (0 to 100).
   */
  calculateCompletionPercentage() {
    const totalTasks = this.todos.length;
    const completedTasks = this.todos.filter((todo) => todo.completed).length;
    return (completedTasks / totalTasks) * 100;
  }
}

module.exports = new TodoApiFuncs();
