import { AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from './signup/signup.component';
import { Router } from '@angular/router';
import { CoreService } from './service/core.service';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wander Quest';

 


  loggedIn:boolean =false;
  adminIn:boolean = false;

  constructor(private _dialog: MatDialog,
    private _coreService: CoreService,
    private _router:Router,
   
    private _loginService: LoginServiceService

    ){}


  refreshPageWithReload() {
      location.reload(); // Reload the current page
    }

  openSignupForm(){
    //open by component
    const dialogRef = this._dialog.open(SignupComponent)
    //when colse button is closed
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this._router.navigate(['/home']);
          
        }
      },
    });
  }

  openLoginForm(){
    //open by component
    const dialogRef = this._dialog.open(LoginComponent)
    
    
    //when colse button is closed
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
       
          this.adminIn = this._loginService.adminIn;
          this.loggedIn = this._loginService.loggedIn;
  
        }
      },
    });
  }

  
  logOut(){
    this.loggedIn = false;
    this.adminIn=false;
    this._router.navigate(['/home']);

  }


  


}
