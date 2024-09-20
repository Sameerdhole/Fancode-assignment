Feature: Validate Residence adn task completion for users from FanCode City

  Scenario: All the users of City `FanCode` should have more than half of their todos task completed.
    Given User has the todo tasks
    And User belongs to the city FanCode
    Then User Completed task percentage should be greater than 50%

    # This is not an optmized scenario design as we need to filter users twice based on todo tasks in 2 different steps

