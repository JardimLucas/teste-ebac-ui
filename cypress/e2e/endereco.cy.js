/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
import EnderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereço.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
       EnderecoPage.editarEnderecoFaturamento('Celso', 'Suzano', 'Fresa', 'Brasil', 'Avenida jose Anchieta', '781', 'Araraquara', 'São Paulo', '14800000', '1699987878', 'celso@fresa.com')
       cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
     });

     it('Deve fazer cadastro de endereço de Entrega com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
     });
});