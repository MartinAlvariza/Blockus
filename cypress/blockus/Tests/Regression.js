import { LoginPage } from "../../pageOjects.js/LoginPage";
import { SignUpPage } from "../../pageOjects.js/SignUpPage";
import { GameStudioPage } from "../../pageOjects.js/GameStudioPage";
import { CreateProjectPage } from "../../pageOjects.js/CreateProjectPage";
import { LogOutPage } from "../../pageOjects.js/LogOutPage";

describe('Regression flow',function(){

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

it('Log in',function(){
    const loginPage = new LoginPage();
    loginPage.getLoginField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getSignInButton().click();
    cy.get('.mb-2').contains('Welcome aboard! Let’s get started with Blockus');
})  

it('Create studio',function(){
    const gameStudioPage = new GameStudioPage();
    gameStudioPage.getCreateStudioButton().click();
    cy.wait(1000);
    cy.get('h3[class="mb-2"]').invoke("text").should("be.eq", "Tell us a bit about your game studio")
    gameStudioPage.getStudioNameField().type(this.data.studioName);
    gameStudioPage.getStudioSizeField().click({force:true}).get('#react-select-2-option-0 > .ml-2').click();
    gameStudioPage.getStudioUrl().type(this.data.studioUrl);
    gameStudioPage.getStudioDescription().type(this.data.studioDescription);
    gameStudioPage.getCreateStudioButton2().click();
    cy.wait(2000);
    cy.get('h3[class="mb-2"]').contains("Let's get started");

})   

it('Create project',function(){
    const createProjectPage = new CreateProjectPage();
    createProjectPage.getCreateProjectButton().click();
    cy.get('h3[class="mb-4"]').contains("Create your first project");
    createProjectPage.getProjectName().type(this.data.projectName);
    createProjectPage.getProjectDescription().type(this.data.projectDescription);
    createProjectPage.getCreateProjectButton2().click();
    
    }) 

    /*it('Log out',function(){
    const logOutPage = new LogOutPage();
    logOutPage.getUserPanel().click();
    logOutPage.getSignOutButton().click();
}) */

}) 