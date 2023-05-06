/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    before(() =>{
        // runs once before all test cases in this decribe block, like beforeClass in testNG
    })

    beforeEach(() =>{
        // run before each test case, beforeMethod in testNG
        cy.clearCookies();
    })
    after(() =>{
        // run once after all tests finished, like afterClass in testNG
    })
    afterEach(() =>{
        //similar to after method in testNG
    })
    it('Opening a web application', () =>{
        cy.visit('https://practice.cydeo.com');
        cy.get(':nth-child(9) > a').click();
    })
})