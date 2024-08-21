import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  arrayProjects : Project[] = [
    {
      titulo : 'Desarrollo',
      subtitulo : 'Desarrollo de Soluciones Digitales Personalizadas',
      description : 'Cada negocio es único. Desarrollo aplicaciones a medida para adaptarse a tus necesidades y objetivos. Transformemos tus ideas en soluciones digitales innovadoras y eficientes. Hablemos sobre cómo crecer tu negocio con tecnología personalizada.',
      enterprise : '',
      image : "../../../../assets/images/Desarrollo.jpg",
      image_descrip: '',
      btn_mas : '/desarrollo-software'
    },
    {
      titulo : 'Tareas y trabajos',
      subtitulo : 'Gestión Eficiente de Tareas y Proyectos con Microsoft Office y Otras Herramientas Digitales',
      description : 'Ofrezco servicios personalizados para la gestión y creación de documentos en Microsoft Office, así como en otras herramientas digitales. Desde tareas escolares hasta proyectos profesionales, garantizo una organización eficiente y resultados de alta calidad para satisfacer todas tus necesidades.',
      enterprise : '',
      image : "../../../../assets/images/trabajos_investigacion.jpg",
      image_descrip: '',
      btn_mas : '/trabajos-redaccion'
    },
    {
      titulo : 'Analisis de datos',
      subtitulo : 'Desarrollo de Soluciones Digitales Personalizadas',
      description : 'Entiendo que cada negocio es único, y me dedico a desarrollar aplicaciones a la medida que se adaptan perfectamente a tus necesidades y objetivos. Trabajemos juntos para transformar tus ideas en soluciones digitales innovadoras y eficientes. Con un enfoque colaborativo y una pasión por la tecnología, estoy aquí para asegurarme de que cada paso del camino sea fluido y exitoso.',
      enterprise : '',
      image : "../../../../assets/images/AnalisisDatos.jpg",
      image_descrip: '',
      btn_mas : '/analisis-datos'
    }
  ]


  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.siguiente_slide();
    }, 10000);
  }

  stopAutoSlide() {
    clearInterval(this.interval);
  }

  anterior_slide() {
    this.stopAutoSlide();
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.arrayProjects.length - 1;
    this.startAutoSlide();
  }

  siguiente_slide() {
    this.stopAutoSlide();
    this.currentIndex = (this.currentIndex + 1) % this.arrayProjects.length;
    this.startAutoSlide();
  }

}
