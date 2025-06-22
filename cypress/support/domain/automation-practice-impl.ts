import { apiEndPoints } from "../constants/api-endpoints";
import { AutomationPracticeUtil } from "../interfaces/interfaces-automation-practice";
import {injectable} from 'inversify';
import { getAPIResponse } from "../utilities/common-methods";
import { ProductsResponse } from "../modals/automation-practice-modals";


@injectable()
export class AutomationPracticeImpl implements AutomationPracticeUtil {
    verifyGetAPIProducts(): Cypress.Chainable<Cypress.Response<ProductsResponse>> {
        let getRequest: Partial<Cypress.RequestOptions> ={};
        getRequest.method='GET';
        getRequest.url=`${Cypress.config().baseUrl}${apiEndPoints.getProducts}`;
     return getAPIResponse<ProductsResponse>(getRequest)   
    }
    verifyHomePage(): void {
        cy.title().should('include','Automation');
    }
    
}