/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            .last()
            //.eq(3)
            //.contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
                .last()
                .click()
                cy.get('.button-variable-item-XL').click()
                cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
                cy.get('.input-text')
                .clear()
                .type(quantidade)
                cy.get('.single_add_to_cart_button').click()

                cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
                cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

    });

    it.only('Deve adiconar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Atlas Fitness Tank', 'S', 'Blue', 1)
    });

    it.only('Deve adiconar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'XL', 'Green', 5)
    });
})
