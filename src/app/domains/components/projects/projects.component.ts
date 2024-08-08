import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Project } from '../../models/project';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  arrayProjects : Project[] = [
    {
      titulo : 'Programación',
      subtitulo : 'Desarrollo de Soluciones Digitales Personalizadas',
      description : 'Entiendo que cada negocio es único, y me dedico a desarrollar aplicaciones a la medida que se adaptan perfectamente a tus necesidades y objetivos. Trabajemos juntos para transformar tus ideas en soluciones digitales innovadoras y eficientes. Con un enfoque colaborativo y una pasión por la tecnología, estoy aquí para asegurarme de que cada paso del camino sea fluido y exitoso. ¡Hablemos sobre cómo podemos hacer crecer tu negocio con tecnología a medida!',
      enterprise : '',
      image : "../../../../assets/images/programing.jpg",
      image_descrip : ''
    },
    {
      titulo : 'Analisis de datos',
      subtitulo : 'Desarrollo de Soluciones Digitales Personalizadas',
      description : 'Entiendo que cada negocio es único, y me dedico a desarrollar aplicaciones a la medida que se adaptan perfectamente a tus necesidades y objetivos. Trabajemos juntos para transformar tus ideas en soluciones digitales innovadoras y eficientes. Con un enfoque colaborativo y una pasión por la tecnología, estoy aquí para asegurarme de que cada paso del camino sea fluido y exitoso. ¡Hablemos sobre cómo podemos hacer crecer tu negocio con tecnología a medida!',
      enterprise : '',
      image : "../../../../assets/images/programing.jpg",
      image_descrip : ''
    }
  ]

}
