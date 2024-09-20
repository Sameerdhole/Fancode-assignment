const { BeforeAll, AfterAll } = require("@cucumber/cucumber");

BeforeAll(async () => {
  console.log("Starting tests...");
});

AfterAll(async () => {
  console.log("Tests completed.");
});
