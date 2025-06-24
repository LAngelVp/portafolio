import { Component } from '@angular/core';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-barra-navegacion',
    imports: [
        CommonModule,
        RouterModule,
    ],
    templateUrl: './barra-navegacion.component.html',
    styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {
  img_menu : string = '../../../../assets/images/burger.svg';
  img_menu_cerrar : string = '../../../../assets/images/cerrar.svg';
  ruta =[
    {
      name : 'Inicio',
      direction : ''
    },
    {
      name : 'Acerca',
      direction : '/about'
    },
    {
      name : 'Proyectos',
      direction : '/projects'
    },
    {
      name : 'Curso',
      direction : '/inicio-sesion'
    },
    {
      name : 'Contacto',
      direction : '/contact'
    },
  ] 
}
