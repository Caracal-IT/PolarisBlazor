import { Context } from '../model/Context.model';
import { Validator } from './validator';
import { Control } from '../model/control.model';
export interface RangeValidatorConfig {
  name: string;
  message: string;
  min: number;
  max: number;
}
export declare class RangeValidator extends Validator {
  validate(context: Context, control: Control, config: RangeValidatorConfig): boolean;
}
