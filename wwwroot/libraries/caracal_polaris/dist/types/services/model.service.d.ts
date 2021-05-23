import { PipeFactory } from "../pipes/factory.pipe";
import { ConfigService } from "./config.service";
export declare class ModelService {
  private config;
  model: {};
  sessionId: string;
  pipes: PipeFactory;
  constructor(config: ConfigService);
  getValue(key: string, model?: any): any;
  getInterpolatedValue(value: string): string;
  setValue(key: string, val: any): void;
  save(): void;
  load(): void;
  clearCache(): void;
  private merge;
  private UUID;
  private replaceAll;
}
