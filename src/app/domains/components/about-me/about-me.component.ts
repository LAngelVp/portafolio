import { Component } from '@angular/core';
import { ToolsUsedComponent } from '../tools-used/tools-used.component';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    ToolsUsedComponent,
    CommonModule,
    TimelineComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  carrera:string="Ingeniero en sistemas computacionales";
  especialidad:string="Ingeniería de software";
  description_personal : string = 'Soy una persona especializada en Ingeniería de Software, con trayectoria en la implementación de soluciones tecnológicas que mejoran la eficiencia de las empresas. He demostrado habilidades excepcionales en el diseño y desarrollo de software, destacando en la resolución efectiva de problemas y la automatización de procesos. Contribuyendo así al éxito de los proyectos. Mi compromiso con el aprendizaje continuo me ha permitido mantenerme actualizado con las últimas tendencias y metodologías en el campo, garantizando soluciones innovadoras. Además de mi experiencia técnica, soy apasionado por seguir evolucionando profesionalmente';
  image:string="../../../../assets/images/imgPersonal.jpg";

  linea_del_tiempo = [
    {
      img : '../../../../assets/images/img1.svg',
      img_alt : 'imagen',
      puesto : 'Freelance',
      fecha : '2020',
      empresa : 'Independiente',
      descripcion : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, corrupti. Id ex reprehenderit enim consequuntur?'
    },
    {
      img : '../../../../assets/images/img2.svg',
      img_alt : 'imagen',
      puesto : 'Soporte tecnico y desarrollo de aplicaciones',
      fecha : '2021',
      empresa : 'Institucion academica',
      descripcion : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, corrupti. Id ex reprehenderit enim consequuntur?'
    },
    {
      img : '../../../../assets/images/img3.svg',
      img_alt : 'imagen',
      puesto : 'Administracdor de servidores y desarrollo web',
      fecha : '2022',
      empresa : 'Kenworth del este',
      descripcion : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, corrupti. Id ex reprehenderit enim consequuntur?'
    },
    {
      img : '../../../../assets/images/img3.svg',
      img_alt : 'imagen',
      puesto : 'Auxiliar de business intelligence',
      fecha : '2023',
      empresa : 'Kenworth del este',
      descripcion : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, corrupti. Id ex reprehenderit enim consequuntur?'
    },
  ]
}
