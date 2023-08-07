export class CreateCollectionPage{

    getProjectButton(){
        return cy.get('.bold');
    }

    getNewCollectionButton(){
        return cy.get('.py-3.5.px');
    }

    getCollectionNameField(){
        return cy.get('input[name="collectionName"]');
    }

    getCollectionDescriptionField(){
        return cy.get('input[name="description"]');
    }

    getCollectionLogo(){
        return cy.get('.flex.gap-6.min-h-[15.625rem]').find('items-center').eq(0);
    }

    getCollectionBanner(){
        return cy.get('.flex.gap-6.min-h-[15.625rem]').find('items-center').eq(1);
    }

    getWebField(){
        return cy.get('input[name="web"]');
    }

    getCreateCollectionButton(){
        return cy.get('button[type="submit"]');
    }

}