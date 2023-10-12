import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from './signup/signup.component';
import { Router } from '@angular/router';
import { CoreService } from './admin/core/core.service';
import { LoginComponent } from './login/login.component';

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
    private _router:Router

    ){}

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
       
          this.loggedIn = true;
          console.log('user loged in!');
        }
      },
    });
  }

  logOut(){
    this.loggedIn = false;
    this._router.navigate(['/home']);
  }

}
