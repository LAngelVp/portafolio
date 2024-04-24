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
  tittle : string = 'ingeniero en sistemas computacionales'
  description_personal : string = 'Soy una persona especializada en Ingeniería de Software, con trayectoria en la implementación de soluciones tecnológicas que mejoran la eficiencia de las empresas. He demostrado habilidades excepcionales en el diseño y desarrollo de software, destacando en la resolución efectiva de problemas y la automatización de procesos. contribuyendo así al éxito de los proyectos. Mi compromiso con el aprendizaje continuo me ha permitido mantenerme actualizado con las últimas tendencias y metodologías en el campo, garantizando soluciones innovadoras. Ademas de mi experiencia técnica, soy apasionado por seguir evolucionando profesionalmente'
}
