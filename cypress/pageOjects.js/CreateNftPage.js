export class CreateNftPage{

    getNftButton(){
        return cy.get('.w-full').eq(13);
    }

    getAddNftButton(){
        return cy.get('.button.bg-green-600');
    }

    getNftNameField(){
        return cy.get('input[placeholder="Enter NFT name"]');
    }

    getNftQuantityField(){
        return cy.get('input[placeholder="Enter amount"]');
    }

    getNftPriceField(){
        return cy.get('input[placeholder="Enter price"]');
    }

    getNftDescriptionField(){
        return cy.get('input[placeholder="Description of this NFT"]');
    }

    getNftImage(){
        return cy.get('input[type="file"]');
    }

    getSaveButton(){
        return cy.get('button[type="submit"]');
    }

}