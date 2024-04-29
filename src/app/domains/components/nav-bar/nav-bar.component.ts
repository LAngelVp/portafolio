import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  links_navbar:string[] =[
    'Inicio',
    'Proyectos',
    'Acerca de',
    'Contacto'
  ]
  img_personal : string = "../../../../assets/images/name_personal_resize.png"
}
