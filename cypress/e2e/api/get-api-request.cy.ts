import { resolve } from "cypress/types/bluebird";
import { AutomationPracticeUtil } from "../../support/interfaces/interfaces-automation-practice";
import { container } from "../../support/container/automation-practice.inversify.config";
import { automationSymbol } from "../../support/container/automation-practice.symbol";

describe('Verify home page', ()=> {

    let automationPracticeUtil: AutomationPracticeUtil;

    before('', ()=> {
        automationPracticeUtil= container.get<AutomationPracticeUtil>(automationSymbol.automationPracticeUtil)

    })

     it('verify get products api',()=> {
        automationPracticeUtil.verifyGetAPIProducts().then(response=> {
    expect(response.status).to.eq(200);
    const parsed =  typeof response.body === 'string'? JSON.parse(response.body) : response.body;
    expect(parsed.responseCode).to.eq(200); // ✅ Check outer property
    expect(parsed.products).not.to.be.null;
    console.log(parsed.products[0]);
    expect(parsed.products.length).to.be.greaterThan(0);
    expect(parsed.products[0].name).to.be.a('string');
        })
     })
})