# Oasis QA Assessment

This repository contains my manual and automated testing submission for the Oasis Management Company QA practical assessment.

## Submitted By

Rukayat Abdulganiyu

## Scope

The assessment covers the following SauceDemo workflows:

- Login validation
- Adding and removing products
- Cart quantity
- Product sorting
- Product details
- About-page navigation
- Checkout validation
- Successful checkout

## Manual Test Report

The manual QA report contains:

- Test cases and execution results
- Defect reports
- Supporting evidence
- Test summary
- QA sign-off and release recommendation

[View the QA Test Report](https://docs.google.com/spreadsheets/d/1S25v5QQbpsXbAxCV48-NVnoEDpOr2PIv0NuChkXazxw/edit)

## Automation Approach

The automated tests were implemented with:

- Cypress
- Cucumber BDD
- Gherkin feature scenarios
- JavaScript step definitions
- Chrome

The supplied legacy SauceDemo `/v1/index.html` URL returned a 404 response during automation. Therefore, the automated tests target the current SauceDemo application at:

`https://www.saucedemo.com`

## Automated Scenarios

1. Sort products by price from low to high.
2. Add Backpack and Onesie, open the Backpack details, remove it and verify that one item remains.
3. Complete checkout successfully with valid information.
4. Prevent checkout when the last name is missing.

## Automation Result

- Total scenarios: 4
- Passed: 4
- Failed: 0
- Browser: Google Chrome 153
- Execution date: 25 September 2026

## Project Structure

```text
cypress/
└── e2e/
    ├── saucedemo.feature
    └── saucedemo/
        └── steps.js