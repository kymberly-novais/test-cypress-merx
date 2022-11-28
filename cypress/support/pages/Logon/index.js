class Logon{

    acessarSite(){
        cy.visit('https://www.preprod.backoffice.merx.tech/')
    }
    preecherLogin(){
        cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Cypress.env('user_name'))
        cy.get('.sc-pjIrY > .MuiButtonBase-root > .MuiButton-label').should('be.visible').click()
        cy.get(':nth-child(3) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Cypress.env('user_password'))
        cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').should('be.visible').click()
        cy.get('.sc-fzoNJl').should('be.visible').log('Login successful')
    }
    acessarNovaOferta(){
        cy.get('.sc-fzqNqU').should('be.visible').click().log('Acessando Menu')
        cy.get(':nth-child(2) > .MuiListItemText-root > .MuiTypography-root').should('be.visible').click()
        cy.get('.MuiButton-contained > .MuiButton-label').should('be.visible').click()

    }

}
export default new Logon();


