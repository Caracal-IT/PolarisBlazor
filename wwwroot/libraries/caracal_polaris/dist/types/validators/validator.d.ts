import { Context } from "../model/context.model";
import { Control } from "../model/control.model";
export declare abstract class Validator {
  name: string;
  constructor(name: string);
  abstract validate(context: Context, control: Control, config: any): boolean;
  setError(control: Control, error: boolean, message?: string): void;
}
