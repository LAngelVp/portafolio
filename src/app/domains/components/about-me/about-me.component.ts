import { Component } from '@angular/core';
import { ToolsUsedComponent } from '../tools-used/tools-used.component';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../timeline/timeline.component';
import { ProyectosComponent } from "../proyectos/proyectos.component";

@Component({
  standalone: true,
    selector: 'app-about-me',
    imports: [
        ToolsUsedComponent,
        CommonModule,
        TimelineComponent,
        ProyectosComponent
    ],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  carrera:string="Ingeniero en sistemas computacionales";
  especialidad:string="Ingeniería de software";
  description_personal : string = 'Soy una persona especializada en Ingeniería de Software, con trayectoria en la implementación de soluciones tecnológicas que mejoran la eficiencia de las empresas. He demostrado habilidades excepcionales en el diseño y desarrollo de software, destacando en la resolución efectiva de problemas y la automatización de procesos. Contribuyendo así al éxito de los proyectos. Mi compromiso con el aprendizaje continuo me ha permitido mantenerme actualizado con las últimas tendencias y metodologías en el campo, garantizando soluciones innovadoras. Además de mi experiencia técnica, soy apasionado por seguir evolucionando profesionalmente';
  image:string="../../../../assets/images/imgPersonal.jpg";
  image2:string="../../../../assets/images/fotoTraje.jpg";

  showPopupItem: any = null;

  handlePopUp(item: any) {
    this.showPopupItem = item;
  }

  closePopUp() {
    this.showPopupItem = null;
  }
}
