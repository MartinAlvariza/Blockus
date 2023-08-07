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
    cy.visit(Cypress.env('url'));
    loginPage.getSignUpButton().click();
    cy.get('.mb-1').contains('Sign Up');
    signUpPage.getUsernameField().type(this.data.username);
    signUpPage.getEmailField().type(this.data.email);
    signUpPage.getPasswordField().type(this.data.password);
    signUpPage.getConfirmPasswordField().type(this.data.confirmPassword);
    signUpPage.getSignUpButton().click();
    cy.get('.mb-1').contains('Welcome back');
})

})