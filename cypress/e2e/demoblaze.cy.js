describe('Demoblaze page', () => {
  it('the login form has correct credentials', () => {
    const data = "jcm";
    cy.visit('https://www.demoblaze.com/index.html');

    cy.get("#login2").click();

    cy.get("#loginusername").type(data).should('have.value', data);

    cy.get('#loginpassword').type(data).should('have.value', data);

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