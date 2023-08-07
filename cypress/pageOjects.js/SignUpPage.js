export class SignUpPage{

    getUsernameField(){
        return cy.get('input[name="userName"]');
    }

    getEmailField(){
        return cy.get('input[name="email"]');
    }

    getPasswordField(){
        return cy.get('input[name="password"]');
    }

    getConfirmPasswordField(){
        return cy.get('input[name="confirmPassword"]');
    }

    getSignUpButton(){
        return cy.get('button[type="submit"]');
    }

}