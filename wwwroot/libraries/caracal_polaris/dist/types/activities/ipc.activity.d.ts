import { Activity } from "./activity";
import { Context } from "../model/context.model";
export declare class IPCActivity implements Activity {
  name: string;
  type: string;
  ctx: Context;
  process: string;
  next: string;
  execute(): Promise<boolean>;
}
