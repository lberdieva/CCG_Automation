//https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/
//Updatable URL list. Must be same domain, with https at start. Test can be duplicated for various domains.
const urls = [
    'https://www.cypress.io',
    'https://www.cypress.io/support',
    'https://www.cypress.io/blog',
];

const urls2 = [
    'https://www.cypress.io',
    'https://www.cypress.io/support',
    'https://www.cypress.io/blog',
];

class PageLoad {
    loadPages() {
        urls.forEach((url) => {
              cy.visit(url)
              cy.log(url + ' loaded successfully')
          })
    }
    loadPages2() {
        urls2.forEach((url) => {
              cy.visit(url)
              cy.log(url + ' loaded successfully')
          })
    }
}

export default PageLoad