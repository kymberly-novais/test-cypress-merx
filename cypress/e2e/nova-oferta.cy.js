/// <reference types="cypress" />

describe('Nova oferta', () => {
    
    beforeEach('Realizando login',() => {
    
      cy.visit('https://www.preprod.backoffice.merx.tech/')
      cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Cypress.env('user_name'))
      cy.get('.sc-pjIrY > .MuiButtonBase-root > .MuiButton-label').should('be.visible').click()
      cy.get(':nth-child(3) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Cypress.env('user_password'))
      cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').should('be.visible').click()
      cy.get('.sc-fzoNJl').should('be.visible').log('Login successful')
      cy.get('.sc-fzqNqU').should('be.visible').click().log('Acessando Menu')
      cy.get(':nth-child(2) > .MuiListItemText-root > .MuiTypography-root').should('be.visible').click()
      cy.get('.MuiButton-contained > .MuiButton-label').should('be.visible').click()
    })
  
    it('Oferta - Fixação depósito', () => {
        cy.get('#mui-component-select-type').click()
        cy.get('[data-value="FIXACAO_DEPOSITO"]').click()
        cy.get('#mui-component-select-product_id').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get('#mui-component-select-modality_id').click()
        cy.get('[data-value="0e3f84c8-7f87-478c-be6b-638d14f60fae"]').click()
        cy.get(':nth-child(3) > :nth-child(1) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('50200')
        cy.get('#mui-component-select-unit_of_measurement_id').click()
        cy.get('.MuiList-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(4) > :nth-child(1) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('6000')
        cy.get(':nth-child(2) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('6000')
        cy.get('#mui-component-select-harvest_id').click()
        cy.get('[data-value="09c71df7-06bf-4012-90ab-f33fb10ff9d2"]').click()
        cy.get('[style="margin-top: 10px; margin-bottom: 8px; width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('#mui-component-select-payment_type').click()
        cy.get('[data-value="TROCA"]').click()
        cy.get('#mui-component-select-delivery_place').click()
        cy.get('.MuiList-root > [tabindex="-1"]').click()
        cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(5) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').should('be.visible').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('[rows="5"]').type('Teste Cypress - Automação')
        cy.get('.MuiButton-label').click()
        cy.get('.jss76').should('be.visible').log('Oferta criada')
        cy.get('.MuiGrid-container > .MuiGrid-root > .MuiTypography-root').should('be.visible')
        cy.get('#mui-component-select-state').click()
        cy.get('[data-value="52005672-8477-4320-8ec7-eecdef7f6bdf"]').click()
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.MuiButton-label').click()
        cy.get('[sx="12"] > .MuiTypography-root').should('be.visible')
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('[flexdirection="column"] > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
    })
    it('Oferta - Fixação Compra', () => {
        cy.get('#mui-component-select-type').click()
        cy.get('.Mui-selected').click()
        cy.get('#mui-component-select-product_id').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get('#mui-component-select-modality_id').click()
        cy.get('[data-value="0e3f84c8-7f87-478c-be6b-638d14f60fae"]').click()
        cy.get(':nth-child(3) > :nth-child(1) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('50200')
        cy.get('#mui-component-select-unit_of_measurement_id').click()
        cy.get('.MuiList-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(4) > :nth-child(1) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('6000')
        cy.get(':nth-child(2) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('6000')
        cy.get('#mui-component-select-harvest_id').click()
        cy.get('[data-value="09c71df7-06bf-4012-90ab-f33fb10ff9d2"]').click()
        cy.get('[style="margin-top: 10px; margin-bottom: 8px; width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('#mui-component-select-payment_type').click()
        cy.get('[data-value="TROCA"]').click()
        cy.get('#mui-component-select-delivery_place').click()
        cy.get('.MuiList-root > [tabindex="-1"]').click()
        cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(5) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').should('be.visible').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('[rows="5"]').type('Teste Cypress - Automação')
        cy.get('.MuiButton-label').click()
        cy.get('.jss76').should('be.visible').log('Oferta criada')
        cy.get('.MuiGrid-container > .MuiGrid-root > .MuiTypography-root').should('be.visible')
        cy.get('#mui-component-select-state').click()
        cy.get('[data-value="52005672-8477-4320-8ec7-eecdef7f6bdf"]').click()
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.MuiButton-label').click()
        cy.get('[sx="12"] > .MuiTypography-root').should('be.visible')
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('[flexdirection="column"] > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('.sc-qalea').should('be.visible')
    })
    it('Oferta - Fixação Compra - Negativo', () => {
        cy.get('#mui-component-select-type').click()
        cy.get('.Mui-selected').click()
        cy.get('#mui-component-select-product_id').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get('#mui-component-select-modality_id').click()
        cy.get('[data-value="0e3f84c8-7f87-478c-be6b-638d14f60fae"]').click()
        cy.get(':nth-child(3) > :nth-child(1) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('50200')
        cy.get('#mui-component-select-unit_of_measurement_id').click()
        cy.get('.MuiList-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(4) > :nth-child(1) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('6000')
        cy.get(':nth-child(2) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('7000')
        cy.get('#mui-component-select-harvest_id').click()
        cy.get('[data-value="09c71df7-06bf-4012-90ab-f33fb10ff9d2"]').click()
        cy.get('[style="margin-top: 10px; margin-bottom: 8px; width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('#mui-component-select-payment_type').click()
        cy.get('[data-value="TROCA"]').click()
        cy.get('#mui-component-select-delivery_place').click()
        cy.get('.MuiList-root > [tabindex="-1"]').click()
        cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get(':nth-child(5) > :nth-child(4) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').should('be.visible').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('[rows="5"]').type('Teste Cypress - Automação')
        cy.get('.MuiButton-label').click()
        cy.get('.jss76').should('be.visible').log('Oferta criada')
        cy.get('.MuiGrid-container > .MuiGrid-root > .MuiTypography-root').should('be.visible')
        cy.get('#mui-component-select-state').click()
        cy.get('[data-value="52005672-8477-4320-8ec7-eecdef7f6bdf"]').click()
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.MuiButton-label').click()
        cy.get('[sx="12"] > .MuiTypography-root').should('be.visible')
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('[flexdirection="column"] > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get(':nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .jss56 > .jss76 > #notistack-snackbar').invoke('O valor do volume minimo e maximo devem ser iguais!')
    })
    it.only('Oferta - Compra', () => {
        cy.get('#mui-component-select-type').click()
        cy.get('[data-value="COMPRA"]').click()
        cy.get('#mui-component-select-product_id').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get('#mui-component-select-modality_id').click()
        cy.get('[data-value="0e3f84c8-7f87-478c-be6b-638d14f60fae"]').click()
        cy.get(':nth-child(3) > :nth-child(1) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('50200')
        cy.get('#mui-component-select-unit_of_measurement_id').click()
        cy.get('.MuiList-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(4) > :nth-child(1) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('6000')
        cy.get(':nth-child(2) > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('6000')
        cy.get('#mui-component-select-harvest_id').click()
        cy.get('[data-value="09c71df7-06bf-4012-90ab-f33fb10ff9d2"]').click()
        cy.get('[name="initial_delivery_date"]').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get(':nth-child(3) > [style="width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('[style="margin-top: 10px; margin-bottom: 8px; width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('#mui-component-select-payment_type').click()
        cy.get('[data-value="TROCA"]').click()
        cy.get('#mui-component-select-shipping').click()
        cy.get('.MuiList-root > :nth-child(3)').click()
        cy.get('#mui-component-select-state').click()
        cy.get('[data-value="SP"]').click()
        //cy.cidade do frete.click
        cy.get('#combo-box').type('Campinas')
        cy.get('.MuiAutocomplete-root > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root').click()
        //
        cy.get('[style="margin-top: 5px;"] > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('1200')
        cy.get('#mui-component-select-delivery_place').click()
        cy.get('.MuiList-root > [tabindex="-1"]').click()
        cy.get(':nth-child(9) > .MuiGrid-root > .sc-qXhiz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Frete soja FOB - Sao Paulo')
        cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('[rows="5"]').type('O gerente enlouqueceu, leve todos pague nada')
        cy.get('.MuiGrid-justify-xs-flex-end > .MuiButtonBase-root').click()



        
       
       
    })

  })
  