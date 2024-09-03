import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, DatePipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@Component({
  selector: "app-students-edit",
  templateUrl: "./students-edit.component.html",
  styleUrls: ["./students-edit.component.scss"],
  standalone: true, 
  imports: [
    RouterModule, 
    CommonModule, 
    ReactiveFormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
})
export class StudentsEditComponent implements OnInit {
  public editId!:number;
  public editStudentsForm!: UntypedFormGroup;
  public pipe = new DatePipe("en-US");
  public url = "studentsList";
  public lstStudents!:Array<any>
  public obj!:object;
  public setDate!:string



  ngOnInit() {

  }

  // Get Students List  Api Call
  loadStudents() {
    
  }

  // Edit students Submit call
  editStudents() {


  }


  

  // set values to students form
  edit() {

  }
}

