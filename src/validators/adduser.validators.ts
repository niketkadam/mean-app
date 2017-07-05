import { FormControl, FormGroup } from "@angular/forms";


export function emailValidator(control: FormControl): { [key: string]: any } {
  var emailRegexp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}

export function matchingPasswords(passwordKey: string, verifyPasswordKey: string) {
  return (group: FormGroup): { [key: string]: any } => {
    let password = group.controls[passwordKey];
    let verifyPassword = group.controls[verifyPasswordKey];
    if (password.value !== verifyPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }

}