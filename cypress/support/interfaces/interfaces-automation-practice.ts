import { ProductsResponse } from "../modals/automation-practice-modals";

export interface AutomationPracticeUtil {
    verifyHomePage():void;
    verifyGetAPIProducts(): Cypress.Chainable<Cypress.Response<ProductsResponse>>;
}