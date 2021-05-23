import { CodeActivity } from './code.activity';
import { Context } from "../model/context.model";
export declare class DecisionActivity extends CodeActivity {
  name: string;
  type: string;
  ctx: Context;
  expression: string;
  trueAction: string;
  falseAction: string;
  execute(): Promise<boolean>;
}
