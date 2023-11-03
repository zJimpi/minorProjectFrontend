import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddDestService {

 // Replace this with your hard-coded data
 private hardCodedDestinations = [
  {
    "destName": "Srirangam",
    "destType": "Temple",
    "imageLocation": "Tiruchirappalli ",
    "stateAndUT": "Tamil Nadu",
    "imageFile": "/assets/images/Srirangam.jpg",
    "popularityScore": "5",
    "imageDescription": "Srirangam is the foremost of the eight self-manifested shrines (Swayam Vyakata Kshetras ) of Lord Vishnu. Sri Renganatha Swamy temple, established in a 156 acre land, is a great vaishnavite temple dedicated to Lord Vishnu. It is also considered the first, foremost and the most important of the 108 main Vishnu temples.",
    "id": 1
  },
  {
    "destName": "Gulmarg",
    "destType": "Mountain",
    "imageLocation": "",
    "stateAndUT": "Jammu and Kashmir",
    "imageFile": "/assets/images/Gulmarg.jpg",
    "popularityScore": "5",
    "imageDescription": "Surrounded by snow-covered lofty Himalayas, meadows of flowers, deep ravines, evergreen forested valleys, Gulmarg also has the world's second-highest Gondola ride. Gulmarg has also been developed as an adventure hub as the Indian Institute of Skiing, and Mountaineering is located here.",
    "id": 2
  },
  {
    "destName": "Palak Lake",
    "destType": "Lake",
    "imageLocation": "Mizoram",
    "stateAndUT": "Mizoram",
    "imageFile": "/assets/images/PalakLake.jpg",
    "popularityScore": "4",
    "imageDescription": "Palak lake is the largest lake in Mizoram and most famous landmark of Mara Autonomous District Council. The local people call it Pala Tipa. Surrounded by lush green forests and mountains, it is home to a range of animals, birds, amphibians and reptiles.",
    "id": 3
  },
  {
    "destName": "Shimla",
    "destType": "Mountain",
    "imageLocation": "Shimla",
    "stateAndUT": "Himachal Pradesh",
    "imageFile": "/assets/images/Shimla.jpg",
    "popularityScore": "5",
    "imageDescription": "Evergreen forests, rolling valleys, breathtaking lakes and the pleasant Shimla weather are only a few reasons that lend this hill station a unique charm. No doubt, the places to visit in Shimla will leave you with memories of a lifetime.",
    "id": 4
  },
  {
    "destName": "Neermahal",
    "destType": "Heritage",
    "imageLocation": "Rudijala",
    "stateAndUT": "Tripura",
    "imageFile": "/assets/images/Neermahal.jpg",
    "popularityScore": "5",
    "imageDescription": "Neermahal also known as Twijilikma Nuyung is a former royal palace of Tripura Kingdom, built by Maharaja Bir Bikram Kishore Manikya bahadur in 1930. It is also the largest water palace in India.",
    "id": 5
  }
  
];

constructor(private _http: HttpClient) {}

getDestinationList(): Observable<any> {
  // Replace the API call with returning the hard-coded data
  return of(this.hardCodedDestinations);
}
}


