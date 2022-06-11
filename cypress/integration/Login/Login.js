import signupPage from '../../pages/SignUpPage'

describe('Sign In', () => {
    it('Login with an existing user', function () {

        signupPage.go()
        signupPage.formLogin()

    }),

    it.only('Make a purchase', () => {
        
        signupPage.go()
        signupPage.formLogin()
        cy.xpath("//img[@alt='SSD A400, Kingston, SA400S37/240G, Cinza']").click()
        cy.get('#buy-now-button').click()
        
        
        // .then(($dialog)=>{
        //     cy.wrap($dialog).find("//span[@class='a-button-inner']/span[contains(., 'crédito')]")
        //     });
        signupPage.creditCardData()
    });
})