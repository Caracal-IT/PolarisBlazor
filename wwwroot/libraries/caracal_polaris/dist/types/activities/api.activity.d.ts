import { Activity } from "./activity";
import { Context } from "../model/context.model";
import { ApiEndpoint } from "../model/api-endpoint.model";
export declare class ApiActivity implements Activity {
  name: string;
  type: string;
  ctx: Context;
  endpoints: Array<ApiEndpoint>;
  next: string;
  execute(): Promise<boolean>;
  private callEndpoints;
  private callEndpoint;
  private gotoNext;
  private getBody;
  private setModel;
}
