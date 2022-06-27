var faker =  require('@faker-js/faker')
var cpf = require('gerador-validador-cpf')

export default {

    customer: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(lastName),
            telefone: '19999999999',
            password: 'adrianoteste',
           
        }

        return data

    }

}