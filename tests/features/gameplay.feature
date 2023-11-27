Feature: Gameplay functionality
  As a gamer I want the game to work

  Background: Enter page
    Given that I am at "http://127.0.0.1:5500/index.html"

  Scenario: Win the game
    When I win the game
    Then I should see the description text "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"

  Scenario: Lose the game
    When I wait enough times to die
    Then I should see the game over text "You health has deteriorated too much - you feel almost dead.<br>Find a caffeine-detox clinic?"





