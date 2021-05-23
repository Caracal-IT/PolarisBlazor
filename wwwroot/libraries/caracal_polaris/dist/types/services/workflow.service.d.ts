import { Context } from "../model/context.model";
import { Process } from "../model/process.model";
import { Activity } from "../activities/activity";
import { WorkflowLoader } from "../utilities/workflow-loader.utility";
export interface WFStack {
  process: string;
  activity: string;
}
export declare class WorkflowService {
  private ctx;
  loader: WorkflowLoader;
  process: Process;
  activity: Activity;
  stack: Array<WFStack>;
  constructor(ctx: Context);
  setProcess(process: any, next?: string, clearStack?: boolean): Promise<void>;
  goto(name: string): void;
  private tryNext;
  private next;
}
