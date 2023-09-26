import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {

//for search bar
  selectedOption: string = 'State & Union Teratories'; // Set a default selected option

  onSubmit() {
    console.log('Selected Option:', this.selectedOption);
    // You can perform further actions with the selected option here
  }
}
