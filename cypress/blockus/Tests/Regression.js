import { LoginPage } from "../../pageOjects.js/LoginPage";
import { SignUpPage } from "../../pageOjects.js/SignUpPage";
import { GameStudioPage } from "../../pageOjects.js/GameStudioPage";
import { CreateProjectPage } from "../../pageOjects.js/CreateProjectPage";
import { LogOutPage } from "../../pageOjects.js/LogOutPage";
import { DeployCollectionPage } from "../../pageOjects.js/DeployCollectionPage";
import { CreateCollectionPage } from "../../pageOjects.js/CreateCollectionPage";
import { CreateNftPage } from "../../pageOjects.js/CreateNftPage";

describe('Regression flow',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })


it('Log in',function(){
    const loginPage = new LoginPage();
    cy.visit(Cypress.env('url'));
    loginPage.getLoginField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getSignInButton().click();
    cy.get('h3[class="mb-4 lg:mb-0"]').contains("Project List");
})  


it('Create project',function(){
    const createProjectPage = new CreateProjectPage();
    cy.wait(2000);
    createProjectPage.getCreateProjectButton().click({ force: true });
    createProjectPage.getProjectName().type(this.data.projectName);
    createProjectPage.getProjectDescription().type(this.data.projectDescription);
    createProjectPage.getProjectImage({force: true}).attachFile("sun.jpg");
    createProjectPage.getCreateProjectButton2().click();
    cy.get('.card-body.h-full').should('be.visible');
   
}) 

it('Create collection',function(){
    const createCollectionPage = new CreateCollectionPage();
    //createCollectionPage.getProjectButton().eq(0).click();
    createCollectionPage.getProjectButton().last().click();
    cy.get('.text-xl').should('be.visible');
    cy.wait(1000);
    createCollectionPage.getNewCollectionButton({force: true}).click();
    cy.get('input[name="collectionName"]').should('be.visible');
    cy.wait(1000);
    createCollectionPage.getCollectionNameField().click({force: true}).type(this.data.collectionName);
    cy.wait(1000);
    createCollectionPage.getCollectionDescriptionField().type(this.data.collectionDescription);
    createCollectionPage.getCollectionLogo({force: true}).attachFile("sun.jpg");
    createCollectionPage.getWebField().type(this.data.collectionWeb);
    //createCollectionPage.getCollectionNameField().click({force: true}).type(this.data.collectionName);
    createCollectionPage.getCreateCollectionButton().click();
    cy.get('.button.bg-gray-500').should('be.visible');
     
})    

it('Create NFT',function(){
    const deployCollectionPage = new DeployCollectionPage();
    const createNftPage = new CreateNftPage();
    createNftPage.getNftButton().click();
    //cy.get('.button.bg-green-600').should('be.visible');
    createNftPage.getAddNftButton().click();
    cy.get('input[placeholder="Enter NFT name"]').should('be.visible');
    createNftPage.getNftNameField().type(this.data.nftName);
    createNftPage.getNftQuantityField().type(this.data.nftQuantity);
    createNftPage.getNftPriceField().type(this.data.nftPrice);
    createNftPage.getNftDescriptionField().type(this.data.nftDescription);
    createNftPage.getNftImage().attachFile("plant.jpg");
    createNftPage.getSaveButton().click();
    cy.get('.card-body.p-0.h-full').should('be.visible');
 
}) 

it('Deploy collection',function(){
    const deployCollectionPage = new DeployCollectionPage();
    deployCollectionPage.getProject().click();
    deployCollectionPage.getDeployButton().click();
    deployCollectionPage.getConfirmDeployButton().click();
    deployCollectionPage.getBackButton().click();
    cy.wait(8000);
    cy.reload()
    cy.get('.bg-green-500').contains('DEPLOYED');
 
})

    /*it('Log out',function(){
    const logOutPage = new LogOutPage();
    logOutPage.getUserPanel().click();
    logOutPage.getSignOutButton().click();
}) */

}) 