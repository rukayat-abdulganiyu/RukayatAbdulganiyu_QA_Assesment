const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("the user is logged in with valid credentials", () => {
  cy.visit("/");

  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();

  cy.url().should("include", "/inventory.html");
});

When("the user sorts products by price from low to high", () => {
  cy.get(".product_sort_container").select("lohi");
});

Then("the product prices should be displayed in ascending order", () => {
  cy.get(".inventory_item_price").then(($prices) => {
    const displayedPrices = [...$prices].map((price) => {
      return Number(price.innerText.replace("$", ""));
    });

    const correctlySortedPrices = [...displayedPrices].sort((a, b) => {
      return a - b;
    });

    expect(displayedPrices).to.deep.equal(correctlySortedPrices);
  });
});

When("the user adds the Backpack and Onesie to the cart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
});

When("the user opens the Backpack product details", () => {
  cy.contains(".inventory_item", "Sauce Labs Backpack")
    .find("img")
    .click();
});

When("the user removes the Backpack from the product details", () => {
  cy.contains("button", "Remove").click();
});

Then("the cart badge should display 1", () => {
  cy.get(".shopping_cart_badge").should("have.text", "1");
});

Given("the user has added the Backpack to the cart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get(".shopping_cart_badge").should("have.text", "1");
});

When("the user completes checkout with valid information", () => {
  cy.get(".shopping_cart_link").click();
  cy.get('[data-test="checkout"]').click();

  cy.get('[data-test="firstName"]').type("Rukayat");
  cy.get('[data-test="lastName"]').type("Abdulganiyu");
  cy.get('[data-test="postalCode"]').type("100001");
  cy.get('[data-test="continue"]').click();

  cy.get('[data-test="finish"]').click();
});

Then("the order should be completed successfully", () => {
  cy.url().should("include", "/checkout-complete.html");
  cy.get(".complete-header").should("contain.text", "Thank you for your order");
});

When("the user attempts checkout without a last name", () => {
  cy.get(".shopping_cart_link").click();
  cy.get('[data-test="checkout"]').click();

  cy.get('[data-test="firstName"]').type("Rukayat");
  cy.get('[data-test="postalCode"]').type("100001");
  cy.get('[data-test="continue"]').click();
});

Then("a last name validation error should be displayed", () => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain.text", "Last Name is required");

  cy.url().should("include", "/checkout-step-one.html");
});