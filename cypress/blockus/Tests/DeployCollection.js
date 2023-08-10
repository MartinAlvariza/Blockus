import {LoginPage} from "../../pageOjects.js/LoginPage";
import { DeployCollectionPage } from "../../pageOjects.js/DeployCollectionPage";

describe('Create collection flow',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Deploy collection',function(){
    const loginPage = new LoginPage();
    const deployCollectionPage = new DeployCollectionPage();
    cy.visit(Cypress.env('url'));
    loginPage.getLoginField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getSignInButton().click();
    deployCollectionPage.getProject().click();
    deployCollectionPage.getDeployButton().click();
    deployCollectionPage.getConfirmDeployButton().click();
    cy.reload()
    //cy.get('.bg-green-500').contains('DEPLOYED'); Need to add cy.wait since the status shows pending for a while
 
})    

})