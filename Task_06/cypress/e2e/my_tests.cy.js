//around 70 assertions

describe('Cypress tests', () => {

  it('Test 1 – Clicks on "type" link and verifies URL', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('include', 'Cypress');
    cy.contains('type').should('be.visible').click();
    cy.url().should('include', '/commands/actions');
    cy.get('.action-email').should('exist');
  });

  it('Test 2 – Verifies page title and header elements', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('include', 'Cypress');
    cy.get('h1').should('exist');
    cy.get('body').should('be.visible');
    cy.get('a').should('have.length.greaterThan', 5);
  });

  it('Test 3 – Types an email and checks the input value', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-email').should('be.visible')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
    cy.get('.action-form').should('exist');
    cy.get('.action-email').should('have.attr', 'placeholder');
  });

  it('Test 4 – Checks visibility and content of button', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-btn').should('be.visible');
    cy.get('.action-btn').should('have.prop', 'tagName');
    cy.get('.action-btn').should('not.be.disabled');
  });

  it('Test 5 – Focuses on input and checks state', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-focus').should('exist');
    cy.get('.action-focus').focus().should('have.class', 'focus');
    cy.get('.action-focus').should('be.enabled');
    cy.get('.action-focus').should('have.attr', 'placeholder');
  });

  it('Test 6 – Blurs input and verifies class change', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-blur').should('be.enabled');
    cy.get('.action-blur').should('exist');
  });

  it('Test 7 – Clears input and checks value', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-clear').type('text').should('have.value', 'text');
    cy.get('.action-clear').clear().should('have.value', '');
    cy.get('.action-clear').should('be.visible');
    cy.get('.action-clear').should('exist');
  });

  it('Test 8 – Types special characters and validates value', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-email').type('!@#^&*()_+').should('have.value', '!@#^&*()_+');
    cy.get('.action-email').should('be.visible');
    cy.get('.action-email').should('exist');
    cy.get('.action-email').should('have.attr', 'type', 'email');
  });

  it('Test 9 – Types and presses Enter', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-email').type('pressenter@example.com{enter}');
    cy.get('.action-email').should('be.visible');
    cy.get('.action-email').should('exist');
  });

  it('Test 10 – Clicks canvas and verifies element', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('#action-canvas').should('exist');
    cy.get('#action-canvas').click(80, 75);
    cy.get('#action-canvas').should('be.visible');
    cy.get('#action-canvas').should('have.prop', 'tagName');
  });

  it('Test 11 – Verifies current URL and page structure', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.url().should('include', 'commands');
    cy.title().should('include', 'Cypress');
    cy.get('h1').should('exist');
    cy.get('body').should('not.be.empty');
  });

  it('Test 12 – Waits then checks title and body content', () => {
    cy.visit('https://example.cypress.io');
    cy.wait(500);
    cy.title().should('include', 'Cypress');
    cy.get('body').should('exist');
  });

  it('Test 13 – Visits example.com and checks layout', () => {
    cy.visit('https://example.com');
    cy.title().should('include', 'Example Domain');
    cy.get('h1').should('contain.text', 'Example Domain');
    cy.get('p').should('exist');
    cy.get('a').should('have.attr', 'href');
  });

  it('Test 14 – Checks example.com header and link text', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('exist');
    cy.get('p').should('contain.text', 'illustrative');
    cy.get('a').should('contain.text', 'More information');
    cy.title().should('include', 'Example');
  });

  it('Test 15 – Visits wikipedia.org and checks elements', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#js-link-box-en').should('contain.text', 'English');
    cy.get('form').should('exist');
    cy.get('input').should('be.visible');
    cy.get('body').should('not.be.empty');
  });

  it('Test 16 – Checks link on example.cypress.io', () => {
    cy.visit('https://example.cypress.io');
    cy.get('a').first().should('have.attr', 'href');
    cy.title().should('include', 'Cypress');
    cy.get('h1').should('exist');
  });

  it('Test 17 – Checks text content on example.com', () => {
    cy.visit('https://example.com');
    cy.get('p').should('include.text', 'illustrative examples');
    cy.get('h1').should('exist');
    cy.get('a').should('exist');
    cy.title().should('include', 'Example Domain');
  });

  it('Test 18 – Visits w3.org and checks logo and links', () => {
    cy.visit('https://www.w3.org/');
    cy.get('img[alt="W3C"]').should('be.visible');
    cy.get('a').should('exist');
    cy.title().should('include', 'W3C');
    cy.get('body').should('not.be.empty');
  });

  it('Test 19 – Checks search bar on DuckDuckGo', () => {
    cy.visit('https://duckduckgo.com/');
    cy.get('input[name="q"]').should('be.visible');
    cy.get('form').should('exist');
    cy.title().should('include', 'DuckDuckGo');
    cy.get('body').should('not.be.empty');
  });

  it('Test 20 – Visits MDN and checks title and elements', () => {
    cy.visit('https://developer.mozilla.org/');
    cy.title().should('include', 'MDN');
    cy.get('input[type="search"]').should('exist');
    cy.get('header').should('exist');
    cy.get('body').should('not.be.empty');
  });

});
