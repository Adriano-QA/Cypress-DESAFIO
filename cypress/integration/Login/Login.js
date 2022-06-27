import signupPage from '../../pages/SignUpPage'

describe('Sign In', () => {
    it('Login with an existing user', function () {

        signupPage.go()
        signupPage.formLogin()

    }),

    it.only('Make a purchase', () => {
        
        signupPage.go()
        signupPage.formLogin()
        cy.xpath("//span[contains(., 'SSD A400, Kingston, SA400S37/240G, Preto')]").eq(0).click({mutiple: true})
        cy.get('#buy-now-button').click()
        signupPage.creditCardData()
    });
})