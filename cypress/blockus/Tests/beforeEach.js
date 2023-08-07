beforeEach(function(){

    Cypress.clearAllSavedSessions();
    
    cy.fixture('example').then(function(data){
        this.data=data;
    })

})