import { Activity } from "./activity";
import { Context } from "../model/context.model";
import { Control } from "../model/control.model";
export declare class PageActivity implements Activity {
  name: string;
  type: string;
  ctx: Context;
  controls: Control[];
  execute(): Promise<boolean>;
}
