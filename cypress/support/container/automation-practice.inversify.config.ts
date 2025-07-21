import { Container } from "inversify";
import { AutomationPracticeUtil } from "../interfaces/interfaces-automation-practice";
import { AutomationPracticeImpl } from "../domain/automation-practice-impl";
import { automationSymbol } from "./automation-practice.symbol";

export const container = new Container();

container
  .bind<AutomationPracticeUtil>(automationSymbol.automationPracticeUtil)
  .to(AutomationPracticeImpl);
