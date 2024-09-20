// page-objects/userApi.js
const pactum = require("pactum");

class UserApiFuncs {
  constructor() {
    this.spec = pactum.spec();
    this.users = [];
  }

  /**
   * Fetches all users from the API and stores them in `this.users`.
   * @async
   * @returns {Promise<Array>} A promise that resolves to an array of user objects.
   */
  async getUsers() {
    this.spec.get("http://jsonplaceholder.typicode.com/users");
    const response = await this.spec.toss();
    this.users = response.json;
    return this.users;
  }

  /**
   * Filters the users to include only those belonging to FanCode city.
   * FanCode city is defined by latitude between -40 and 5, and longitude between 5 and 100.
   * @returns {Array} An array of user objects from FanCode city.
   */
  getUsersFromFanCodeCity() {
    return this.users.filter((user) => {
      const lat = parseFloat(user.address.geo.lat);
      const lng = parseFloat(user.address.geo.lng);
      return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;
    });
  }
}

module.exports = new UserApiFuncs();
