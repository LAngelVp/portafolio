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
  // url_video:string="../../../../assets/video/video_header.mp4";
  titulo:string="Que todas las aventuras se vuelvan realidad con compromiso y constancia"
  img : string = "../../../../assets/images/img1.svg"

  btnSolicitarInformacion(){
    const numero = '2713997432';
    const mensaje = 'Estoy interesad@ en sus servicios.';
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(link, '_blank');
  }
}
