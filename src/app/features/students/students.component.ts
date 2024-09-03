import { CommonModule } from '@angular/common';
import { Component, NgZone, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@HostListener("window: resize", ["$event"])
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true, 
  imports: [CommonModule, RouterOutlet]
})
export class StudentsComponent  {
  public innerHeight!: string;
  constructor(private ngZone: NgZone, private router: Router) {
    window.onresize = () => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + "px";
      });
    };
    this.getScreenHeight();
   }
   getScreenHeight() {
    this.innerHeight = window.innerHeight + "px";
  }




}
