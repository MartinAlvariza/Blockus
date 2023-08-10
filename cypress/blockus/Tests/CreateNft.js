import {LoginPage} from "../../pageOjects.js/LoginPage";
import { DeployCollectionPage } from "../../pageOjects.js/DeployCollectionPage";
import { CreateNftPage } from "../../pageOjects.js/CreateNftPage";

describe('Create collection flow',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Create NFT',function(){
    const loginPage = new LoginPage();
    const deployCollectionPage = new DeployCollectionPage();
    const createNftPage = new CreateNftPage();
    cy.visit(Cypress.env('url'));
    loginPage.getLoginField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getSignInButton().click();
    deployCollectionPage.getProject().click();
    createNftPage.getViewButton().click();
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

})