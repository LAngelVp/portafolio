import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
    selector: 'app-header-personal',
    imports: [CommonModule],
    templateUrl: './header-personal.component.html',
    styleUrl: './header-personal.component.css'
})
export class HeaderPersonalComponent {
  titulo:string="No te compares con nadie en este mundo. Si lo haces, te estás insultando a ti mismo."
  img : string = "../../../../assets/images/imagen1.png"

  btnSolicitarInformacion(){
    const numero = '2713997432';
    const mensaje = 'Estoy interesad@ en sus servicios.';
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(link, '_blank');
  }
}
