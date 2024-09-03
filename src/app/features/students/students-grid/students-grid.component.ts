import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-students-grid',
  templateUrl: './students-grid.component.html',
  styleUrls: ['./students-grid.component.scss'],
  standalone: true, 
  imports: [RouterModule, CommonModule]
})
export class StudentsGridComponent {

  grids!:  Array<any>;


}
