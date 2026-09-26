Feature: SauceDemo product and checkout workflows

  Scenario: Sort products by price from low to high
    Given the user is logged in with valid credentials
    When the user sorts products by price from low to high
    Then the product prices should be displayed in ascending order

Scenario: Remove Backpack from product details while retaining Onesie
    Given the user is logged in with valid credentials
    When the user adds the Backpack and Onesie to the cart
    And the user opens the Backpack product details
    And the user removes the Backpack from the product details
    Then the cart badge should display 1

Scenario: Complete checkout successfully
    Given the user is logged in with valid credentials
    And the user has added the Backpack to the cart
    When the user completes checkout with valid information
    Then the order should be completed successfully

Scenario: Prevent checkout when the last name is missing
    Given the user is logged in with valid credentials
    And the user has added the Backpack to the cart
    When the user attempts checkout without a last name
    Then a last name validation error should be displayed