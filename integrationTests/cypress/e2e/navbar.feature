Feature: Tests for Navbar Functionality

  Scenario: Navbar is collapsable on correct viewport
    Given viewport is set to 375 by 667
    And user is on page "index"
    When the user clicks navbar collapse button
    Then "collapseExample" does not have class "collapse"

  Scenario: Navbar is not collapsable on incorrect viewport
    Given viewport is set to 1920 by 1080
    And user is on page "index"
    Then "collapseExample" has class "collapse"
    And "collapse-button" is not visible

  Scenario: Navbar has all menu entries
    Given viewport is set to 1920 by 1080
    And user is on page "index"
    Then navbar has valid menu entries
