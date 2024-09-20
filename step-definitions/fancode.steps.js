const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const apiUtils = require("../utils/apiUtils");

let users;
let fancodeResidentUsers = [];
let usersWithTodos = [];
let todos;

Given("User has the todo tasks", async function () {
  users = await apiUtils.getUsers();

  // Filter users based on if the todos array length is greater than 0
  if (todos.length > 0) {
    usersWithTodos.push(user);
  }
});

Given("User belongs to the city FanCode", function () {
  fancodeResidentUsers = usersWithTodos.filter((user) => {
    const { lat, lng } = user.address.geo;
    return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;
  });
  expect(fancodeResidentUsers.length).to.be.greaterThan(0);
});

Then(
  "User Completed task percentage should be greater than 50%",
  async function () {
    for (const user of fancodeResidentUsers) {
      todos = await apiUtils.getTodosByUserId(user.id);
      const completedTasks = todos.filter((todo) => todo.completed).length;
      const completionRate = (completedTasks / todos.length) * 100;
      expect(completionRate).to.be.greaterThan(50);
    }
  },
);
