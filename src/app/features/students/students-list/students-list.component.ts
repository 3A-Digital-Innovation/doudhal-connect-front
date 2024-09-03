import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  standalone: true, 
  imports: [
    RouterModule, 
    CommonModule, 
    FormsModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class StudentsListComponent implements OnInit {
  public studentslist!: Array<any>;
  public searchDataValue= '';
  dataSource!: any;

  // pagination variables
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<any> = [];
  public totalPages = 0;
  //** / pagination variables



  ngOnInit(): void {
    this.getTableData();
  }

  private getTableData(): void {

  }

  public sortData(sort: Sort) {

  }

  public searchData(value: string): void {

  }

  public getMoreData(event: string): void {

  }

  public moveToPage(pageNumber: number): void {

  }

  public changePageSize(): void {

  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    
  }

}
