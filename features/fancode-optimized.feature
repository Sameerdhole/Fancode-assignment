Feature: Validate Residence adn task completion for users from FanCode City

  Scenario: All the users of City `FanCode` should have more than half of their todos task completed
    Given A list of users
    And The users are from the city FanCode
    Then All users must have more than 50% of their todos completed
