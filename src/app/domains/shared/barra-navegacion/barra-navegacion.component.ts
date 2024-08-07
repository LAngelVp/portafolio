import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    AboutMeComponent,
    RouterOutlet
  ],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  img_menu : string = '../../../../assets/images/burger.svg';
  img_menu_cerrar : string = '../../../../assets/images/cerrar.svg';
  ruta =[
    {
      name : 'About',
      direction : '/about'
    },
    {
      name : 'Projects',
      direction : ''
    },
    {
      name : 'Contact',
      direction : ''
    },
  ] 
}
