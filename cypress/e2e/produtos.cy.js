/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            .first()
            //.last()
            //.eq(3)
            //.contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]')
                .contains('Abominable Hoodie').click()
                cy.get('.button-variable-item-XL').click()                
                cy.get('.input-text')
                .clear()
                .type(quantidade)
                cy.get('.single_add_to_cart_button').click()

                //cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
                //cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });

    it('Deve adiconar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'S', 'Red', 1)
    });

    it('Deve adiconar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'XL', 'Green', 5)
    });
})
