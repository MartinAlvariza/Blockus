export class CreateCollectionPage{

    getProjectButton(){
        return cy.get('.card-body.h-full');
    }

    getNewCollectionButton(){
        return cy.get('.ml-2');
    }

    getCollectionNameField(){
        return cy.get('input[name="collectionName"]');
    }

    getCollectionDescriptionField(){
        return cy.get('input[name="description"]');
    }

    getCollectionLogo(){
        return cy.get('input[type="file"]').eq(0);
    }

    getCollectionBanner(){
        return cy.get('input[type="file"]').eq(1);
    }

    getWebField(){
        return cy.get('input[name="web"]');
    }

    getCreateCollectionButton(){
        return cy.get('button[type="submit"]');
    }

}