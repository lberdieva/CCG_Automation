import FormFill from '../../integration/Page Objects/join_form.spec'

describe('My First Test without page object', () => {
    it('loads the page with all steps here to give an idea of basic flow', () => {
      cy.visit('https://www.pmgnotes.com/join/free/')
      cy.get('input[name="FirstName"]')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
    })
  })

describe('My First Test with page object', () => {
    it('Creates a joinform object and then runs the first method', () => {
        const joinform = new FormFill()
        cy.visit('https://www.ngccoin.com/join/free/')
        joinform.setFields('test1')
        joinform.checkBoxes()
    })
})