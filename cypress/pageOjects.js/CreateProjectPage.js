export class CreateProjectPage{

    getCreateProjectButton(){
        return cy.get('.button');
    }

    getProjectName(){
        return cy.get('input[placeholder="Your project name"]');
    }

    getProjectDescription(){
        return cy.get('input[name="description"]');
    }

    getCreateProjectButton2(){
        return cy.get('button[type="submit"]');
    }

}