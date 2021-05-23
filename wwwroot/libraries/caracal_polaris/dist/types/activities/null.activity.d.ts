import { Activity } from "./activity";
export declare class NullActivity implements Activity {
  name: string;
  type: string;
  execute(): Promise<boolean>;
}
