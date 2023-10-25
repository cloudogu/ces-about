// Loads all commands from the dogu integration library into this project
import '@bahmutov/cy-api'

declare global {
    namespace Cypress {
        interface Chainable {

        }
    }
}
