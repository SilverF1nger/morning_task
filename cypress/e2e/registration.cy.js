import { randomUser } from '../support/randomUser.js';
const user = randomUser ();

describe('Registration Flow', () => {


    it('should register a new user', () => {
      cy.visit('https://www.demoblaze.com/');
      cy.get('#signin2').click();
      cy.get('#sign-username').type(user.userName);
      cy.get('#sign-password').type(user.password);
      cy.get('button[onclick="register()"]').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Sign up successful.');
      });
    });
  });
  