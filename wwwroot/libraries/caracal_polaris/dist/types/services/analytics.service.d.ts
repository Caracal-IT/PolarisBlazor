export declare class AnalyticsService {
  sendMessage(event: any): void;
  send(type: string, path: Array<HTMLElement>): void;
  getPath(event: any): any;
  private sendPostMessage;
  private getName;
  private createPayload;
  private getHashCode;
}
