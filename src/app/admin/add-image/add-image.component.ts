import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddImgService } from '../service/add-img.service';
import { CoreService } from '../core/core.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ImageFormComponent } from '../image-form/image-form.component';
import { AssImageToDestFormComponent } from '../ass-image-to-dest-form/ass-image-to-dest-form.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent {


  constructor(private httpClient: HttpClient) { }

  selectedFile !: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message !: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log('Selected File:', this.selectedFile);
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8086/image', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';//+response.body;
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

  //   //Gets called when the user clicks on retieve image button to get the image from back end
  //   getImage() {
  //   //Make a call to Spring Boot to get the Image Bytes.
  //   this.httpClient.get('http://localhost:8086/image/' + this.imageName, { responseType: 'blob' })
  //     .subscribe(
  //       res => {
  //         this.retrieveResonse = res;
  //         this.base64Data = this.retrieveResonse.picByte;
  //         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       }
  //     );
  // }

  // code by chatgpt


  getImage() {
    // Make a call to Spring Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8086/image/' + this.imageName, { responseType: 'blob' })
      .subscribe(
        res => {
          const contentType = res.type; // Get the content type from the response

          // Create a URL for the Blob based on the content type
          const imageUrl = window.URL.createObjectURL(res);

          // Set the retrieved image URL to display it
          this.retrievedImage = imageUrl;

          // Determine the image format based on the content type
          let imageFormat = 'jpeg'; // Default to JPEG
          if (contentType === 'image/png') {
            imageFormat = 'png';
          }

          console.log(`Image format: ${imageFormat}`);
        }
      );
}


}
