import { Context } from "../model/context.model";
import { Page } from "../model/page.model";
import { Control } from "../model/control.model";
export declare class PageBuilder {
  private ctx;
  onInput: (element: HTMLElement & Control) => void;
  constructor(ctx: Context & Page);
  build(parent: HTMLElement, onInput: (element: HTMLElement & Control) => void): void;
  clearPage(parent: HTMLElement): void;
  private addComponent;
  private createWorkflowElement;
  private createElement;
  private bind;
  private bindCaption;
  private interpolate;
  private addErrorLabel;
}
