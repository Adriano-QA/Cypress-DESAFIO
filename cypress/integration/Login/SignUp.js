import signupPage from '../../pages/SignUpPage'
import signupFactory from '../../Factories/SignUpFactory'

describe('Signup', () => {
    it('Create a new account', function () {

        var customer = signupFactory.customer()

        signupPage.go()
        signupPage.fillForm(customer)
        signupPage.submit()

        const message = 'Verificar o endereço de e-mail'
        signupPage.MessageShouldBeValidation(message)
    })
});