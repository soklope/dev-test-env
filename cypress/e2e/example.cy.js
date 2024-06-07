// https://on.cypress.io/api

describe('Renders Website', () => {

  it('Visits Website', () => {
    cy.visit('/')
  })

  it('Checks Status', () => {
    cy.request('http://localhost:5173/').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Tests Navigation', () => {
    cy.visit('/')
    cy.get('a').contains('About').click()
    cy.url().should('include', '/about')
  })
})