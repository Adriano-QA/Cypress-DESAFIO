import signupPage from '../../pages/SignUpPage'
import signupFactory from '../../Factories/SignUpFactory'

describe('Sign Up', () => {
    it('Create a new account', function () {

        var customer = signupFactory.customer()

        signupPage.go()
        signupPage.fillForm(customer)
        signupPage.submit()

        const message = 'Verificar o endereço de e-mail'
        signupPage.MessageShouldBeValidation(message)
    }),

    it('Validate fields empty ', () => {

        signupPage.go()
        cy.xpath("//div[@id='nav-flyout-ya-newCust']/a").click()
        signupPage.submit()

        const message = '\n        \n          \n            \n          \n        \n      \n  Insira seu nome\n\n  Digite seu e-mail ou número de telefone celular\n\n  Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente.\n\n  As senhas devem ter pelo menos 6 caracteres.\n\n  Mínimo de 6 caracteres necessários\n\n  Mínimo de 6 caracteres necessários\n\n  Digite sua senha novamente\n\n  As senhas não são iguais\n'
        signupPage.MessageEmptyFields(message)
    })
});