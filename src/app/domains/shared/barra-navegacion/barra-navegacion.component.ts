import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  img_menu : string = '../../../../assets/images/burger.svg';
  img_menu_cerrar : string = '../../../../assets/images/cerrar.svg';
}
