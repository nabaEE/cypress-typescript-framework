import { resolve } from "cypress/types/bluebird";
import { AutomationPracticeUtil } from "../../support/interfaces/interfaces-automation-practice";
import { container } from "../../support/container/automation-practice.inversify.config";
import { automationSymbol } from "../../support/container/automation-practice.symbol";

describe("verify api tests", () => {
  let automationPracticeUtil: AutomationPracticeUtil;

  before("", () => {
    automationPracticeUtil = container.get<AutomationPracticeUtil>(
      automationSymbol.automationPracticeUtil,
    );
  });

  it("verify search products", () => {
    automationPracticeUtil.verifySearchProducts().then((productResponse) => {
      expect(productResponse.status).to.eq(200);
    });
  });
});
