
import { Component, AfterViewInit, ElementRef, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
     private router: Router
    ) {}






  //button shoul navigate to ddestination component
  navigateToDestination() {
    window.scrollTo(0, 0);
    this.router.navigate(['/destination']);
  }



  openMajorProject(){
    this.router.navigate(['/majorProject']);
  }


  
}
