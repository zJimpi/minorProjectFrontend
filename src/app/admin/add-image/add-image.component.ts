import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddImgService } from '../service/add-img.service';
import { CoreService } from '../core/core.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ImageFormComponent } from '../image-form/image-form.component';
import { AssImageToDestFormComponent } from '../ass-image-to-dest-form/ass-image-to-dest-form.component';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit{


  selectedFileName: string ="";

  displayedColumns: string[] = [
    'id',
    'imageFile',
    'action'
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _dialog: MatDialog,
    private _imgService: AddImgService,
    private _coreService: CoreService
    ){}
   
    ngOnInit(): void {
      this.getImageList();
      
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

  openImgForm(){
    //open by component
    const dialogRef = this._dialog.open(ImageFormComponent)
    //when colse button is closed
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //refreeshes the list
          this.getImageList();
        }
      },
    });
  }

    //show the tables
    getImageList() {
      this._imgService.getImageList().subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
      });
    }

//for seaching by name ..and other feilds
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

//when delete icon is cicked
deleteImage(id: number) {
  this._imgService.deleteImage(id).subscribe({
    next: (res) => {
      this._coreService.openSnackBar('Image deleted!', 'done');
      this.getImageList();
    },
    error: console.log,
  });
}

openImgEditForm(data: any) {
  const dialogRef = this._dialog.open(ImageFormComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getImageList();
      }
    },
  });
}

// opens assign img destion form
openImgAssDestForm(){
  //open by component
  const dialogRef = this._dialog.open(AssImageToDestFormComponent)
  //when colse button is closed
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this._coreService.openSnackBar('Image assigned susesfully!', 'done');
      }
    },
  });
}


}
