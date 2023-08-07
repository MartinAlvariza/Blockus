export class GameStudioPage{

    getCreateStudioButton(){
        return cy.get('.bg-indigo-600')
    }

    getStudioNameField(){
        return cy.get('input[name="name"]')
    }

    getStudioSizeField(){
        return cy.get('.select__control')
    }

    getStudioUrl(){
        return cy.get('input[name="url"]')
    }

    getStudioDescription(){
        return cy.get('input[name="description"]')
    }

    getCreateStudioButton2(){
        return cy.get('button[type="submit"]')
    }

}