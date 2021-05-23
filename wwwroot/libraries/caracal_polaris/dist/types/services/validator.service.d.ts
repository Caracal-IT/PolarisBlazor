import { Validator } from "../validators/validator";
import { Context } from "../model/context.model";
export declare class ValidatorService {
  private validators;
  validate(ctx: Context): boolean;
  addValidator(validator: Validator): void;
  private validateControl;
  private sendErrorMsg;
}
