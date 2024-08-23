import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit, OnDestroy {

  public Toggledata = true;
  public CustomControler!: string | number;
  form = new UntypedFormGroup({
    email: new UntypedFormControl('admin@dreamguys.in', [Validators.required]),
    password: new UntypedFormControl('123456', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  

  ngOnInit() {

  }

  submit() {
  }
  ngOnDestroy() {
  }
  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }
}

