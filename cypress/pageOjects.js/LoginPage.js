export class LoginPage{

    getLoginField(){
        return cy.get('input[name="email"]');
    }

    getPasswordField(){
        return cy.get('input[name="password"]');
    }
    
    getSignInButton(){
        return cy.get('button[name="signIn"]');
    }
    getSignUpButton(){
        return cy.get('a[href="/sign-up"]');
    }

}