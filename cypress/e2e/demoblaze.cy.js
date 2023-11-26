describe('Demoblaze page', () => {
  it('the login form has correct credentials', () => {
    cy.visit('https://www.demoblaze.com/index.html');

    cy.get("#login2").click();

    cy.get("#loginusername").type("jcm").should('have.value', "jcm");

    cy.get('#loginpassword').type("jcm").should('have.value', "jcm");

    cy.get('button').contains('Log in').click();

    cy.get('#nameofuser').should('contain', 'Welcome jcm');
  })

  it('the login form doesnt have a password', () => {
    
    cy.visit('https://www.demoblaze.com/index.html')

    cy.get("#login2").type('click');
 
    cy.get("#loginusername").type('jcm');
    
    cy.get('button').contains('Log in').click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please fill out Username and Password.');
    });
  })
})