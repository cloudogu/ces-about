import '@bahmutov/cy-api'
import {Then} from "@badeball/cypress-cucumber-preprocessor";

const warrentyText = 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING\n' +
  '            BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n' +
  '            NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\n' +
  '            IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE\n' +
  '            OR OTHER DEALINGS IN THE SOFTWARE.';

Then("{string} has class {string}", function (elementId: String, className: String) {
  cy.get("#" + elementId).should('have.class', className)
});

Then("{string} does not have class {string}", function (elementId: String, className: String) {
  cy.get("#" + elementId).should('not.have.class', className)
});

Then("{string} sibling has {string}", function (elementId: String, className: String) {
  cy.get("#" + elementId).siblings()[0].should('have.class', className)
});

Then("license panel {string} has text that contains warranty information", (elementId: String) =>  {
  cy.get("#" + elementId).siblings()[0].contains(warrentyText)
});

Then("{string} is not visible" , (elementId: String) => {
  cy.get("#" + elementId).should('have.css', 'display', 'none')
});

Then("navbar has valid menu entries", () => {
  const navbarEntries = ["About Cloudogu", "Licenses", "Privacy Policy", "Terms and Conditions", "Imprint"]
  cy.get('ul>li').each((item, index) => {
    cy.wrap(item)
      .should('contain.text', navbarEntries[index])
  })
});
