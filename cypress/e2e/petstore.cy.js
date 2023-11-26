describe('Petstore page', () => {
    it('Shows Angelfish details page', () => {
      cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
  
      cy.get("input[name=keyword]").type('fish');
   
      cy.get("input[name=searchProducts]").click();

    cy.get("a").contains("Salt Water fish from Australia").click();

    cy.get("a").contains("EST-2").click();

    cy.url().should('include', 'EST-2');
    })
  })