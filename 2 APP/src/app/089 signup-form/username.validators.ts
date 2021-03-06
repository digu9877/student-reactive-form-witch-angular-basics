import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class UsernameValidators {
  static cannotContainSpace: ValidatorFn;
  cannotContainSpace(control : AbstractControl) : ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
        return { cannotContainSpace : true};

        return null;
  }
}
