import {LoginPage} from "../../pageOjects.js/LoginPage";
import { CreateCollectionPage } from "../../pageOjects.js/CreateCollectionPage";

describe('Create collection flow',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Create collection',function(){
    const loginPage = new LoginPage();
    const createCollectionPage = new CreateCollectionPage();
    cy.visit(Cypress.env('url'));
    loginPage.getLoginField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getSignInButton().click();
    cy.get('h3[class="mb-4 lg:mb-0"]').contains("Project List");
    createCollectionPage.getProjectButton().eq(0).click();
    cy.get('.leading-5').should('be.visible');
    createCollectionPage.getNewCollectionButton();
 
})    

})