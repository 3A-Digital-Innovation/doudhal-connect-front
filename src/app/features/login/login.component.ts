import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder) {
  }
  Toggledata = true;
  CustomControler!: string | number;
  form!: FormGroup


  ngOnInit() {
    this.initLoginFormGroup();
  }

  private initLoginFormGroup(){
    this.form = this.fb.group({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
    });
  }

  get f() {
    return this.form.controls;
  }
  submit() {

  }
  ngOnDestroy() {

  }

}

