import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  adminIn:boolean =false;
  loginForm: FormGroup;

  constructor(private _fb:FormBuilder,
    private _loginService: LoginServiceService,
    private _dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private _router:Router

    ){

    this.loginForm=this._fb.group({

      username:['',Validators.required],
      password:['',Validators.required],
    });
  }

  onLogin(){
    
    this._loginService.getuser().subscribe({
      next:(userDetails: any) => {

        const user = userDetails.find((a:any)=>{
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        });

        if (user) {

          if(this.checkAdmin(user.username))
          {
            this._coreService.openSnackBar(' Admin logged in succesfully');
            this._dialogRef.close(true);
            // Redirect to the home page 
            this._router.navigate(['/home']);
            //show log out button
            this._loginService.adminIn= true; // Initialize as false
            this._loginService.loggedIn= true;
           
          }

          else{
          this._coreService.openSnackBar('logged in succesfully');
          this._dialogRef.close(true);
          // Redirect to the home page 
          this._router.navigate(['/home']);
          //show log out button
          this._loginService.adminIn= false;
          this._loginService.loggedIn= true; // Initialize as false
         
        }

        } 
        else {
          // Password is incorrect or user not found
          this._coreService.openSnackBar('Inccorect password!');
          this._dialogRef.close(true);
          this._router.navigate(['/home']);
          this._loginService.loggedIn= false;
          this._loginService.adminIn= false;
         
        }
 
      },
      error: (err: any) => {
        console.error(err);
        
      }
  });
 
  }
  

  checkAdmin(username: string): boolean {
    if(username.endsWith('admin')){
      return true;
    }
     // Example: Admin emails end with "@admin.com"

    return false;
  }


  onlogout(){
    this._router.navigate(['/home']);
  }

  hide = true;
}
