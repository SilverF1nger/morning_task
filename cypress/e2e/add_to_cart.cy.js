import { randomUser } from '../support/randomUser.js';
const user = randomUser ();


describe('Add to Cart Flow', () => {
    it('should add Samsung Galaxy S6 to the cart', () => {
      cy.visit('https://www.demoblaze.com/');
      
      cy.get('#login2').click();
      cy.get('#loginusername').type(user.userName);
      cy.get('#loginpassword').type(user.password);
      cy.get('button[onclick="logIn()"]').click();
      cy.contains('Welcome yourUsername').should('be.visible');
      
      cy.contains('Samsung galaxy s6').click();
      cy.get('.btn-success').click();
      
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Product added.');
      });
  
      cy.get('#cartur').click();
      cy.contains('Samsung galaxy s6').should('be.visible');
    });
  });
  