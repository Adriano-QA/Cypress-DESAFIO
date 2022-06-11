class SignupPage {

    go() {
        cy.visit('/')
        cy.xpath("//h2[contains(., 'Navegue por loja')]").should('contain', 'Navegue por loja')

        cy.get('#nav-flyout-accountList').should('not.be.visible')
        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.get('#nav-flyout-accountList').should('be.visible')
        cy.xpath("//div[@id='nav-flyout-ya-newCust']/a").click()
    }

    fillForm(customer) {
        cy.get('#ap_customer_name').type(customer.name)
        cy.get('#ap_email').type(customer.email)
        cy.get('#ap_password').type(customer.password)
        cy.get('#ap_password_check').type(customer.password)

    }

    fillFormNotValidation(deliver) {
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    
    submit() {
        cy.get('#continue').click()

    }

    MessageShouldBeValidation(message) {
        cy.contains('.a-spacing-small > h1', message).should('be.visible')
    }


}

export default new SignupPage;


