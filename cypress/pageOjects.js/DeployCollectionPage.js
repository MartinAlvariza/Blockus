export class DeployCollectionPage{

    getProject(){
        return cy.get('.card-body.h-full');
    }

    getDeployButton(){
        return cy.get('.button.bg-pink-500');
    }

    getConfirmDeployButton(){
        return cy.get('.button.bg-pink-500').eq(1);
    }


}