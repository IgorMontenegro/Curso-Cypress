// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Dar prioridade para outros tipos
//https://docs.cypress.io/api/cypress-api/selector-playground-api#Syntax
// Cypress.SelectorPlayground.defaults({
//     selectorPriority: ['id', 'class', 'attributes'],
// })

//Plug in de xpath
require('cypress-xpath')