import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-personal.component.html',
  styleUrl: './header-personal.component.css'
})
export class HeaderPersonalComponent {
  subtitulo : string = 'Desarrollando el futuro digital juntos: ¡Descubre mi portafolio y transforma tu visión en realidad!'
  // url_video:string="../../../../assets/video/video_header.mp4";
  titulo:string=" Innovación Tecnológica y Soluciones Creativas"
  img : string = "../../../../assets/images/img1.svg"

  btnSolicitarInformacion(){
    const numero = '2713997432';
    const mensaje = 'Estoy interesad@ en sus servicios.';
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(link, '_blank');
  }
}
