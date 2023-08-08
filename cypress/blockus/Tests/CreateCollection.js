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
    cy.get('.text-xl').should('be.visible');
    cy.wait(2000);
    createCollectionPage.getNewCollectionButton().click();
    cy.get('input[name="collectionName"]').should('be.visible');
    createCollectionPage.getCollectionNameField().type(this.data.collectionName);
    createCollectionPage.getCollectionDescriptionField().type(this.data.collectionDescription);
    createCollectionPage.getCollectionLogo().selectFile({
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'file.txt',
        lastModified: Date.now(),
      })
    createCollectionPage.getWebField().type(this.data.collectionWeb);
 
})    

})