import { randomUser } from '../support/randomUser.js';
const user = randomUser ();


describe('Login Flow', () => {
    it('should login with valid credentials', () => {
      cy.visit('https://www.demoblaze.com/');
      cy.get('#login2').click();
      cy.get('#loginusername').type(user.userName);
      cy.get('#loginpassword').type(user.password);
      cy.get('button[onclick="logIn()"]').click();
      cy.contains('Welcome yourUsername').should('be.visible');
    });
  });
  