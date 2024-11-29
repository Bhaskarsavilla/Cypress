class LoginPage {

    getUsernameTextfield() {
        return cy.get('#idp-discovery-username')
    }

    getNextButton() {
        return cy.get('#idp-discovery-submit')
    }

    getPasswordTextfield() {
        return cy.get('#okta-signin-password')
    }

    getSigninButton() {
        return cy.get('#okta-signin-submit')
    }
}

export default LoginPage