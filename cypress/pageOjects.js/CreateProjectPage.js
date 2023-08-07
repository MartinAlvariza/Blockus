export class CreateProjectPage{

    getCreateProjectButton(){
        return cy.get(':nth-child(1) > .card-body > .justify-between > .button');
    }

    getProjectName(){
        return cy.get('input[name="name"]');
    }

    getProjectDescription(){
        return cy.get('input[name="description"]');
    }

    getCreateProjectButton2(){
        return cy.get('button[type="submit"]');
    }

}