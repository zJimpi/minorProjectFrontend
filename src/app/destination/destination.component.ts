import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddDestService } from '../service/add-dest.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {

  retrievedImage: any;
  imageName: any;
  displayedColumns: string[] = [
    'id',
    'imageFile',
    'destName',
    
    'imageLocation',
    'stateAndUT',
    'destType',
    
    'imageDescription',
    'popularityScore',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog: MatDialog,
    private _destService: AddDestService,
    private httpClient: HttpClient
    ){}
    ngOnInit(): void {
      this.getDestinationList();
      
    }


  //show the tables
  getDestinationList() {
    this._destService.getDestinationList().subscribe({
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


}
