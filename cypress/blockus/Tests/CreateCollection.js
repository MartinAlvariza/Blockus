import {LoginPage} from "../../pageOjects.js/LoginPage";
import { CreateProjectPage } from "../../pageOjects.js/CreateProjectPage";
import { CreateCollectionPage } from "../../pageOjects.js/CreateCollectionPage";

describe('Create collection flow',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Log in',function(){
    const loginPage = new LoginPage();
    cy.visit(Cypress.env('url'));
    cy.get('.mb-1').contains('Welcome back');
    loginPage.getLoginField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getSignInButton().click();
    //cy.get('.mb-2').contains('Welcome aboard! Let’s get started with Blockus');
    cy.get('h3[class="mb-4 lg:mb-0"]').contains("Project List");
 
})    

it('Create project',function(){
    const createProjectPage = new CreateProjectPage();
    createProjectPage.getCreateProjectButton().click({ force: true });
    cy.wait(1000);
    createProjectPage.getProjectName().type(this.data.projectName);
    createProjectPage.getProjectDescription().type(this.data.projectDescription);
    createProjectPage.getCreateProjectButton2().click();
    
    }) 

it('Create collection',function(){
    const createCollectionPage = new CreateCollectionPage();
    createCollectionPage.getProjectButton().click();
    cy.get('.leading-5').should('be.visible');
    //createCollectionPage.getNewCollectionButton();
 
})   

})