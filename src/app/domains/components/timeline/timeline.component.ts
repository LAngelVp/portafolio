import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  experiencia = [
    {
      puesto : 'Freelance',
      empresa : 'Independiente',
      descripcion : 'Implementación de conocimientos en software, Microsoft office, redes, gestión de proyectos',
      periodo : '2020 - 2021',
      linkAcercaDe : '#'
    },
    {
      puesto : 'Soporte y desarrollo',
      empresa : 'Institución acádemica',
      descripcion : 'Administración de red, soporte, instalaciones CCTV y desarrollo',
      periodo : '2021 - 2021',
      linkAcercaDe : '#'
    },
    {
      puesto : 'Desarrollador Backend',
      empresa : 'Syfei',
      descripcion : 'Soporte a soluciones de codigo y creación de funcionalidades nuevas, bases de datos, etc',
      periodo : '2021 - 2022',
      linkAcercaDe : '#'
    },
    {
      puesto : 'Administrador de servidores y desarrollo web',
      empresa : 'Kenworth del este',
      descripcion : 'Levantamiento y administración de servidores, desarrollo de software y bases de datos',
      periodo : '2022 - 2023',
      linkAcercaDe : '#'
    },
    {
      puesto : 'Business Intelligence',
      empresa : 'Kenworth del este',
      descripcion : 'ETL para el analisis de datos, desarrollo de scripts para automatización de procesos, desarrollo de componentes de Salesforce, Excel, Bases de datos.',
      periodo : 2023,
      linkAcercaDe : '#'
    }
  ]
}
