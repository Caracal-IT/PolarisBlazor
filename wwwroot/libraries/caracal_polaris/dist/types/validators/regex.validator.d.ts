import { Context } from '../model/Context.model';
import { Validator } from './validator';
import { Control } from '../model/control.model';
export interface RegexValidatorConfig {
  name: string;
  message: string;
  expression: string;
}
export declare class RegexValidator extends Validator {
  validate(context: Context, control: Control, config: RegexValidatorConfig): boolean;
}
