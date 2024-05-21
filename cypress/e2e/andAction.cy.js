import { randomUser } from '../support/randomUser.js';
const user = randomUser();

describe('User Flow', () => {
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

  it('should log in with the registered user', () => {
    cy.visit('https://www.demoblaze.com/');

    cy.get('#login2').click();
    cy.get('#loginusername').type(user.userName);
    cy.get('#loginpassword').type(user.password);
    cy.get('button[onclick="logIn()"]').click();

    cy.get('#nameofuser').should('contain', `Welcome ${user.userName}`);
  });

  it('should add Samsung Galaxy S6 to the cart', () => {
    cy.visit('https://www.demoblaze.com/');

    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });

    cy.get('#cartur').click();
    cy.contains('Samsung galaxy s6').should('be.visible');
  });
});
