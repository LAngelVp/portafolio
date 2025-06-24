import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-btn-llamada-acion',
    imports: [
        CommonModule
    ],
    templateUrl: './btn-llamada-acion.component.html',
    styleUrl: './btn-llamada-acion.component.css'
})
export class BtnLlamadaAcionComponent {
  ruta =
    {
      name : 'Contacto',
      direction : '/contact'
    }
}
