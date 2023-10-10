import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {

//for search bar
  selectedOption: string = 'State & Union Teratories'; // Set a default selected option

  liElements: NodeListOf<HTMLLIElement>;
  liArray: HTMLLIElement[];
  
  constructor() {
    this.liElements = document.querySelectorAll("li");
    this.liArray = Array.from(this.liElements);

    this.liArray.forEach((li: HTMLLIElement) => {
      li.addEventListener("click", () => {
        this.liArray.forEach((item: HTMLLIElement) => {
          item.classList.remove("selected");
        });

        const selectedValue: any = li.textContent;
        li.classList.add("selected");
        console.log("Selected value: " + selectedValue);
      });
    });
  }


  onSubmit() {
    console.log('Selected Option:', this.selectedOption);
    // You can perform further actions with the selected option here
  }

//code for selecting state name
  
}
