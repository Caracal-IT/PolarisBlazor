import { Context } from '../model/Context.model';
import { Validator } from './validator';
import { Control } from '../model/control.model';
export interface RequiredValidatorConfig {
  name: string;
  message: string;
}
export declare class RequiredValidator extends Validator {
  validate(context: Context, control: Control, config: RequiredValidatorConfig): boolean;
}
