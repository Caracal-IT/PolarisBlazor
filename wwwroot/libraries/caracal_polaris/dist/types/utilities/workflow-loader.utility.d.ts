import { HttpService } from "../services/http.service";
export interface WorkflowLoader {
  load(processName: string): Promise<string>;
}
export declare class HttpWorkflowLoader implements WorkflowLoader {
  private http;
  constructor(http: HttpService);
  load(processName: string): Promise<string>;
}
