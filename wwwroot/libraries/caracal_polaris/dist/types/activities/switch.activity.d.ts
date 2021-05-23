import { CodeActivity } from "./code.activity";
import { Context } from "../model/context.model";
import { Rule } from "../model/rule.model";
export declare class SwitchActivity extends CodeActivity {
  name: string;
  type: string;
  ctx: Context;
  rules: Array<Rule>;
  execute(): Promise<boolean>;
}
