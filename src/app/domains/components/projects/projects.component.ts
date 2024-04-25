import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
      id : 1,
      name : "Desarrollo web",
      description : "Desarrollo de una página web para un hotel boutique, resaltando su encanto y servicios de lujo. Los usuarios pueden reservar fácilmente habitaciones y explorar atracciones locales en un diseño moderno y responsivo.",
      enterprise : "cliente individual",
      image : "../../../../assets/images/webimg1.png"
    },
    {
      id : 1,
      name : "Desarrollo web",
      description : "Desarrollo de una página web para un hotel boutique, resaltando su encanto y servicios de lujo. Los usuarios pueden reservar fácilmente habitaciones y explorar atracciones locales en un diseño moderno y responsivo.",
      enterprise : "cliente kenworth del este",
      image : "../../../../assets/images/kweimg2.png"
    },
    {
      id : 1,
      name : "Desarrollo de escritorio",
      description : "Desarrollo de una página web para un hotel boutique, resaltando su encanto y servicios de lujo. Los usuarios pueden reservar fácilmente habitaciones y explorar atracciones locales en un diseño moderno y responsivo.",
      enterprise : "cliente kenworth del este",
      image : "../../../../assets/images/kweimg1.png"
    },
    {
      id : 1,
      name : "Desarrollo de escritorio",
      description : "Desarrollo de una página web para un hotel boutique, resaltando su encanto y servicios de lujo. Los usuarios pueden reservar fácilmente habitaciones y explorar atracciones locales en un diseño moderno y responsivo.",
      enterprise : "cliente individual",
      image : "../../../../assets/images/posimg1.png"
    },
    {
      id : 1,
      name : "Desarrollo web",
      description : "Desarrollo de una página web para un hotel boutique, resaltando su encanto y servicios de lujo. Los usuarios pueden reservar fácilmente habitaciones y explorar atracciones locales en un diseño moderno y responsivo.",
      enterprise : "proyecto de práctica",
      image : "../../../../assets/images/comerimg1.png"
    },

  ]
}
