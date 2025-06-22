import { resolve } from "cypress/types/bluebird";
import { container } from "../../../support/container/automation-practice.inversify.config";
import { automationSymbol } from "../../../support/container/automation-practice.symbol";
import { AutomationPracticeUtil } from "../../../support/interfaces/interfaces-automation-practice";

describe('Verify home page', ()=> {

    let automationPracticeUtil: AutomationPracticeUtil;

    before('', ()=> {
        automationPracticeUtil= container.get<AutomationPracticeUtil>(automationSymbol.automationPracticeUtil)

    })


     it('verify home page title', ()=> {
        cy.visit('/');
        automationPracticeUtil.verifyHomePage();

     })
})