class SignupPage {

    go() {
        cy.visit('/')
        cy.xpath("//h2[contains(., 'Navegue por loja')]").should('contain', 'Navegue por loja')

        cy.get('#nav-flyout-accountList').should('not.be.visible')
        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.get('#nav-flyout-accountList').should('be.visible')
    }

    fillForm(customer) {
        cy.xpath("//div[@id='nav-flyout-ya-newCust']/a").click()
        cy.get('#ap_customer_name').type(customer.name)
        cy.get('#ap_email').type(customer.email)
        cy.get('#ap_password').type(customer.password)
        cy.get('#ap_password_check').type(customer.password)

    }

    formLogin() {
        cy.get('#nav-flyout-ya-signin > .nav-action-button > .nav-action-inner').click()
        cy.get('#ap_email').type('teste_ecommerce@hotmail.com')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type('adrianoteste')
        cy.wait(2000)
        cy.get('#signInSubmit').click()
        cy.xpath("//h2[contains(., 'Ofertas')]").should('contain', 'Ofertas')
    }

    creditCardData() {
        cy.xpath("//span[@class='a-button-inner']/span[contains(., 'crédito')]").should('be.visible').click({force:true})
        cy.wait(4000)
        cy.get('iframe').then(iframe => {
            const body= iframe.contents().find('body')
            cy.wrap(body).find('input[name="addCreditCardNumber"]').type(4706905463020965)
            cy.wrap(body).find('input[name="ppw-accountHolderName"]').type('Adriano Teste')
            cy.wrap(body).find('input[name="addCreditCardVerificationNumber"]').type(705)
            cy.wrap(body).find('select[name="ppw-expirationDate_year"]').select('2025',{force: true})
            cy.wrap(body).find('input[name="ppw-widgetEvent:AddCreditCardEvent"]').click()
            cy.wait(4000)
        })
        //cy.xpath("//span[@id='pp-vPjb1p-77']").click()
        cy.xpath("//span[@class='a-button a-button-span12 a-button-primary pmts-button-input']").eq(0).click({multiple:true})
        cy.xpath("//span[@class='a-button-inner']/a[contains(., 'Utilize')]").should('contain', 'Utilize este endereço').click()
        cy.xpath("//span[@class='a-button-inner a-button-span12 ']").click()
        cy.xpath("//div[@class='a-box-inner a-alert-container']/h4[contains(., 'Pedido feito')]").should('contain', 'Pedido feito')
    }

    
    submit() {
        cy.get('#continue').click()

    }

    MessageShouldBeValidation(message) {
        cy.get('.a-spacing-small > h1', message).should('contain', message)
    }

    MessageEmptyFields(message) {
        cy.xpath("//div[@class='a-alert-content']").should('have.text', message)
    }


}

export default new SignupPage;


