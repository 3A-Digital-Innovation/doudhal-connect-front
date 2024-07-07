import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menuItems = [
    {
      name: 'Eleves',
      icon: 'fa fa-graduation-cap',
      children: [
        {
          name: 'Listes des eleves',
          link: 'students',
        },
        {
          name: 'Ajouter un eleve',
          link: '/students/new',
        },
        {
          name: 'Inscription',
          link: '/students/registration',
        }
      ]
    },
  ];
}
