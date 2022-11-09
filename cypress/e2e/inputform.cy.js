/// <reference types="Cypress" />
import { inputform } from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("input forms demo", function () {
    before(function () {
        cy.visit("/")
    });

    it("Simple form demo: Verify Single Input Field", function () {
        cy.get(inputform.inputformMenu).click()
        cy.get(inputform.simpleFormDemo).click()
        cy.get(inputform.singleInputMessage).click()
        cy.get(inputform.singleInputMessage).type('you are welcome')
        cy.get(inputform.showMessageBtn).click()
        cy.get(inputform.messageText).contains('you are welcome')

    })

   it("Simple form demo: Verify Two Input Field", function () {
      cy.get(inputform.inputformMenu).click()
      cy.get(inputform.simpleFormDemo).click()
      cy.get(inputform.messageA).type('10')
      cy.get(inputform.messageB).type('25')
      cy.get(inputform.getTotalBtn).click()
      cy.get(inputform.messageInt).contains("35")
  })
  it("Check box demo: Verify Single Check Box", function () {
    cy.get(inputform.inputformMenu).click()
    cy.get(inputform.checkBoxDemo).click()
    cy.get('#isAgeSelected').check() 
    cy.get(inputform.checkBoxMessage).contains("Check box is checked")  
  })

  it("Check box demo: Multiple Single Check Box", function () {
    cy.get(inputform.inputformMenu).click()
    cy.get(inputform.checkBoxDemo).click()
    cy.get(inputform.checkAllBtn).click()   
  })

  it("Radio button demo: Verify Radio Button", function () {
    cy.get(inputform.inputformMenu).click()
    cy.get(inputform.radioButtonDemo).click() 
    cy.get('.panel-body > :nth-child(3) > input').check()
    cy.get(inputform.getCheckedValueBtn).click()
    cy.get(inputform.radioButtonMessage).contains("Radio button 'Female' is checked")
  })

  it("Radio button demo: Verify Group Radio Button", function () {
    cy.get(inputform.inputformMenu).click()
    cy.get(inputform.radioButtonDemo).click() 
    cy.get('.panel-body > :nth-child(2) > :nth-child(2) > input').check()
    cy.get(':nth-child(3) > :nth-child(3) > input').check()
    cy.get(inputform.getValueBtn).click()
    cy.get(inputform.groupRadioButtonMessage).contains("Sex : Male Age group: 5 - 15")
  })

  it("Select drop down: Verify Single List Demo", function () {
    cy.get(inputform.inputformMenu).click()
    cy.get(inputform.selectDropdownList).click()
    cy.get("#select-demo").select(5).invoke("val").should("eq", "Thursday") 
    cy.get(inputform.daySelectedMessage).contains("Day selected :- Thursday")  
  })

  it("Select drop down: Verify Multi Select List Demo", function () {
    cy.get(inputform.inputformMenu).click()
    cy.get(inputform.selectDropdownList).click()
    cy.get(inputform.multiSelect).click()
    cy.get('#isAgeSelected').check() 
    cy.get(inputform.checkBoxMessage).contains("Check box is checked")  
  })

  
    
  
  
   
    

})


