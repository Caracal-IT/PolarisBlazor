import { Activity } from "./activity";
import { Context } from "../model/context.model";
export declare class ActivityFactory {
  static activities: Array<Activity>;
  static create(config: any, ctx: Context): Activity;
  static add(activity: Activity, replace?: boolean): void;
}
