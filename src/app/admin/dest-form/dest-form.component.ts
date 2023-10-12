import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddDestService } from '../service/add-dest.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-dest-form',
  templateUrl: './dest-form.component.html',
  styleUrls: ['./dest-form.component.css']
})
export class DestFormComponent implements OnInit {

 
  destForm:FormGroup;
  
  stateNames: string[]=[
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir', 
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Orissa',
    'Punjab',
    'Rajasthan',
    
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    
    
    
    'Andaman and Nicobar Islands',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Pondicherry',
    
    'Chandigarh'
  ];


  constructor(private _fb:FormBuilder,
    private _destService: AddDestService,
    private _dialogRef: MatDialogRef<DestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService

    ){

    this.destForm=this._fb.group({
      destName:'', 
      destType:'',
      imageLocation:'',
      stateAndUT:'',
      imageFile:'/assets/images/',
      popularityScore:0,
      imageDescription:''
    });
  }

  //when in edit mode the previous data will show
  ngOnInit(): void {
      this.destForm.patchValue(this.data);
  }


  //on submitting the form
  onFormSubmit(){
    if (this.destForm.valid) {
      if (this.data) {
        //if data exist then update it 
        this._destService
          .updateDestination(this.data.id, this.destForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Destinaltion detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        //else add the data
        this._destService.addDestination(this.destForm.value).subscribe({
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
