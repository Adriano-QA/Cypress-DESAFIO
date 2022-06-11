import signupPage from '../../pages/SignUpPage'

describe('Sign In', () => {
    it.only('Login with an existing user', function () {

        signupPage.go()
        cy.get('#nav-flyout-ya-signin > .nav-action-button > .nav-action-inner').click()
        signupPage.formLogin()
        cy.get('#signInSubmit').click()

        const message = 'Verificar o endereço de e-mail'
        signupPage.MessageShouldBeValidation(message)
    })
})