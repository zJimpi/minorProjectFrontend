import { HttpClient } from '@angular/common/http';
import { Component,Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../admin/core/core.service';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  signupForm: FormGroup;

  constructor(private _fb:FormBuilder,
    private _loginService: LoginServiceService,
    private _dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService

    ){

    this.signupForm=this._fb.group({
      name:['', [Validators.required,Validators.minLength(2),Validators.pattern("^[a-zA-Z ]+$")]], 
      email:['', [Validators.required, Validators.email]],
      username:['', [Validators.required,Validators.minLength(2)]],
      password:['', [Validators.required,Validators.minLength(8)]]
    });
  }

  onSignup(){
    if(this.signupForm.valid){
      this._loginService.adduser(this.signupForm.value).subscribe({
        next: (val :any)=>{
          this._coreService.openSnackBar('Resigter susessfully!');
          this._dialogRef.close(true);
        },
        error: (err:any)=>{
          console.error(err);
        }
      });
    }
  }

  hide = true;
  //custom validators


}
