//https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/
//Add as many inputs as possible to single method. 
//If there's consistency in join flow across sites/forms, try and maximize the single methods global usage
class FormFill {
    setFields(input) {
        cy.get('input[name="Email"]')
        .type('CypressUser'+input+'@themxgroup.com')
        cy.get('input[name="ConfirmEmail"]')
        .type('CypressUser'+input+'@themxgroup.com')
        cy.get('input[name="Password"]')
        .type('XeFal1!'+input)
        cy.get('input[name="ConfirmPassword"]')
        .type('XeFal1!'+input)
    }

    checkBoxes(){
        cy.get('*[class^="checkbox"]').click() 
        
        cy.get('iframe')
        .first()
        .then(cy.wrap)
        .find('rc-inline-block')
        .click();
    }   

    submit(){

    }
}

export default FormFill