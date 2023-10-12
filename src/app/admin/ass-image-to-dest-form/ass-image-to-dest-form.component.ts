import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddDestService } from '../service/add-dest.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { AddImgService } from '../service/add-img.service';
import { AssImgToDestService } from '../service/ass-img-to-dest.service';

@Component({
  selector: 'app-ass-image-to-dest-form',
  templateUrl: './ass-image-to-dest-form.component.html',
  styleUrls: ['./ass-image-to-dest-form.component.css']
})
export class AssImageToDestFormComponent {

  assImgToDestForm:FormGroup;

  constructor(private _fb:FormBuilder,
    private _assignService: AssImgToDestService,
    private _dialogRef: MatDialogRef<AssImageToDestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
    ){

      this.assImgToDestForm = this._fb.group({
        imgId:null,
        destId:null
      });
    }
  //on submitting the form
  onAssignFormSubmit(){
    if (this.assImgToDestForm.valid) {
      this._assignService.assImgToDest(this.data.imgId, this.data.destId,this.assImgToDestForm.value)
      .subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Image assinged to Destination!');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }

  }

}
