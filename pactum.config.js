const { request } = require("pactum");

request.setBaseUrl("http://jsonplaceholder.typicode.com");

module.exports = request;
