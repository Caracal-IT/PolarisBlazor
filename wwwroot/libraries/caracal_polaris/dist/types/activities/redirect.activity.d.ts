import { Activity } from "./activity";
import { Context } from "../model/context.model";
export declare class RedirectActivity implements Activity {
  name: string;
  type: string;
  ctx: Context;
  location?: string;
  next: string;
  execute(): Promise<boolean>;
}
