/// <reference types="Cypress" />

describe('Rest API with Cypress', () =>{

    it('API Test - Validate Headers', () =>{
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })

    it('API Test - Validate Status code', ()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon')
            .its('status')
            .should('equal',200)

    })

    it('API Test - Validate Name values', () =>{
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon').its('body').should('include',{name : 'pikachu'})

    })

    it('API Test - Validate Negative status code', () =>{

        cy.request({
            method: 'GET',
            url:'https://pokeapi.co/api/v2/pokemon/1000',
            failOnStatusCode: false,
        }).as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 404)
    })

    //need example to access API using different authentication methods like Oauth/bearer token etc
    //need example to run iterative test to validate different endpoints using data from json

    it('API Test - Validate Status code for GoRest API', ()=>{
        cy.request('https://gorest.co.in/public-api/users?id=1502').as('gorest')
        cy.get('@gorest')
            .its('status')
            .should('equal',200)

    })

  /*  it('API Test - Validate Status code for GoRest API', ()=>{
        cy.request('https://gorest.co.in/public-api/users/123').as('gorest')
        cy.get('@gorest')
            .its('body').should('deep.include',{gender: 'Male'})
            

    })

    it('API Test - Validate Status code for GoRest API', ()=>{
        cy.request('https://gorest.co.in/public-api/users?id=1502').as('gorest')

       cy.get('@gorest').its('body').should('include',{name : 'Suman'})
       

    })*/

    

    


})