Feature: Daily Tarot Card Draw

  Scenario: Verify card draw flow and loading state
    Given the user navigates to the Daily Tarot application
    When the user clicks the "REVEAL MY CARD" button
    Then the button should temporarily disable and display "CONSULTING..."
    And after the channeling process, a random Major Arcana card should be displayed
    And the button should re-enable and display "DRAW ANOTHER CARD"