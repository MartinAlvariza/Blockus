export class LogOutPage{

    getUserPanel(){
        return cy.get('.header-action-item.flex.items-center.gap-2');
    }

    getSignOutButton(){
        return cy.get('.text-xl.opacity-50');
    }
}