import { Activity } from "./activity";
import { Context } from "../model/context.model";
export declare class FinishActivity implements Activity {
  name: string;
  type: string;
  next: string;
  ctx: Context;
  execute(): Promise<boolean>;
}
