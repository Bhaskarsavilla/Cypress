// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginToOkta', () => {
    const userArgs = { username: Cypress.env('user'), password: Cypress.env('password') }
    cy.origin('login-dev.tgsnopec.com', { args: userArgs }, ({ username}) => {
        cy.get('#idp-discovery-username').type(username)
        cy.get('#idp-discovery-submit').click()
    })
    cy.origin('tgs.oktapreview.com', { args: userArgs }, ({ password}) => {
        cy.get('input[type="password"]').type(password)
        cy.get('#okta-signin-submit').click()
    })
})
Cypress.Commands.add('clearDownloads',()=>{
    cy.task("clearDownloadsFolder")
})
const ExcelJs = require('exceljs');
Cypress.Commands.add('readExcelFile',(filePath)=>{
    return cy.task('readExcel',filePath);
})