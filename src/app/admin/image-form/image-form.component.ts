import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddImgService } from '../service/add-img.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent {

  
  selectedFileName: string ="";
  imgForm:FormGroup;
  
  
  constructor(private _fb:FormBuilder,
    private _imgService: AddImgService,
    private _dialogRef: MatDialogRef<ImageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService

    ){

    this.imgForm=this._fb.group({
      
      imageFile:null,
     
    });
  }

  //when in edit mode the previous data will show
  ngOnInit(): void {
      this.imgForm.patchValue(this.data);
  }

  // displays the selcted file name to the user
  fileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    } else {
      this.selectedFileName = '';
    }
  }





  //on submitting the form
  onFormSubmit(){
    if (this.imgForm.valid) {
      if (this.data) {
        //if data exist then update it 
        this._imgService
          .updateImage(this.data.id, this.imgForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Image detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        //else add the data
        this._imgService.addImage(this.imgForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Destinaltion added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
     }

}
