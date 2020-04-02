import { AbstractControl } from "@angular/forms";

export function passwordMatchValidator(control: AbstractControl) {
    if(control && (control.value !== null || control.value !== undefined)) {
        const repassword = control.value;
        const passControl = control.root.get('password');
        if(passControl){
            const password = passControl.value;
            if(repassword !== password){
                return{
                    isError: true
                }
            }
        }
    }
    return null;
}