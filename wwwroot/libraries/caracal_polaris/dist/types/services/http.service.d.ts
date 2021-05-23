import { Endpoint } from "../model/endpoint.model";
import { Context } from "../model/context.model";
export declare class HttpService {
  private ctx;
  constructor(ctx: Context);
  fetch(endpoint: Endpoint): Promise<any>;
  private getConfig;
  private resolveSetting;
  private replace;
}
