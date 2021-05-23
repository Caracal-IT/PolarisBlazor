import { Activity } from "./activity";
import { Context } from "../model/context.model";
export declare class AssignActivity implements Activity {
  name: string;
  type: string;
  ctx: Context;
  key: string;
  value: string;
  next: string;
  execute(): Promise<boolean>;
}
