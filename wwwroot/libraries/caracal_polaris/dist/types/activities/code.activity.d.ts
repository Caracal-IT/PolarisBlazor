import { Activity } from "./activity";
import { Context } from "../model/context.model";
export declare class CodeActivity implements Activity {
  name: string;
  type: string;
  ctx: Context;
  expression: string;
  next: string;
  execute(): Promise<boolean>;
  eval(expression: string, ctx: Context): any;
}
