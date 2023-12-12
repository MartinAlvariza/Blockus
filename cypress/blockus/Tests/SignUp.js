import { LoginPage } from "../../pageOjects.js/LoginPage";
import { SignUpPage } from "../../pageOjects.js/SignUpPage";

describe('Sign up flow',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Sign up',function(){
    const loginPage = new LoginPage();
    const signUpPage = new SignUpPage();
    const serverId = 'cbwxl8ab';
    //const serverDomain = 'brought-lost@cbwxl8ab.mailosaur.net';
    const testEmail = 'anything@cbwxl8ab.mailosaur.net';

    cy.visit(Cypress.env('url'));
    loginPage.getSignUpButton().click();
    cy.get('.mb-1').contains('Sign Up');
    signUpPage.getUsernameField().type(this.data.username);
    signUpPage.getEmailField().type(this.data.email);
    signUpPage.getPasswordField().type(this.data.password);
    signUpPage.getConfirmPasswordField().type(this.data.confirmPassword);
    signUpPage.getSignUpButton().click();
    cy.get('.mb-1').contains('Authenticate your account');

    /*cy.mailosaurGetMessage(serverId, {
        sentTo: testEmail
      }).then(email => {
        expect(email.subject).to.contain('SUJECT');
      })*/
    
})

/*it('Get verification code', () => {
    cy.visit('https://github.com/password_reset')
    cy.title().should('equal', 'Forgot your password?')
    cy.get('#email_field').type(testEmail)
  })*/

})