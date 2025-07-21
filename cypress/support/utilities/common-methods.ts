export function getAPIResponse<T = any>(
  options: Partial<Cypress.RequestOptions>,
): Cypress.Chainable<Cypress.Response<T>> {
  return cy.request<T>(options);
}
