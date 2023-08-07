import {LoginPage} from "../../pageOjects.js/LoginPage";
import { GameStudioPage } from "../../pageOjects.js/GameStudioPage";

describe('Create studio',function(){
    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    
    })

it('Create studio',function(){
    const loginPage = new LoginPage();
    const gameStudioPage = new GameStudioPage();
    cy.visit(Cypress.env('url'));
    cy.get('.mb-1').contains('Welcome back');
    loginPage.getLoginField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getSignInButton().click();
    cy.get('.mb-2').contains('Welcome aboard! Let’s get started with Blockus');
    cy.wait(1000);
    gameStudioPage.getCreateStudioButton().click();
    gameStudioPage.getStudioNameField().type(this.data.studioName);
    gameStudioPage.getStudioSizeField().click({force:true}).get('.studio-size-option', { timeout: 5000 }).contains('11~50').click({force:true});
    gameStudioPage.getStudioUrl().type(this.data.studioUrl);
    gameStudioPage.getStudioDescription().type(this.data.studioDescription);
})     


})