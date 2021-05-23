import { Activity } from "./activity";
import { Context } from "../model/context.model";
export declare class MessageActivity implements Activity {
  name: string;
  type: string;
  ctx: Context;
  messageType: string;
  description: string;
  message: string;
  next: string;
  execute(): Promise<boolean>;
}
