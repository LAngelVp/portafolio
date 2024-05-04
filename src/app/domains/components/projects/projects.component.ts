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
      id : 1,
      name : "Desarrollo web",
      description : "Desarrollo de una página web para un hotel boutique, resaltando su encanto y servicios de lujo. Los usuarios pueden reservar fácilmente habitaciones y explorar atracciones locales en un diseño moderno y responsivo.",
      enterprise : "cliente individual",
      image : "../../../../assets/images/webimg1.png"
    },
    {
      id : 1,
      name : "Desarrollo web",
      description : "Construcción de una página web para Transportes Rápido y Seguro, empresa de transporte de carga pesada, destacando su eficiencia y seguridad. Este sitio web intuitivo facilita la búsqueda de servicios y transmite confianza, permitiendo una mayor visibilidad en línea y la expansión de su base de clientes.",
      enterprise : "cliente kenworth del este",
      image : "../../../../assets/images/kweimg2.png"
    },
    {
      id : 1,
      name : "Desarrollo de escritorio",
      description : "Producción de una aplicación para procesamiento de datos, enfocada en inteligencia de negocios. Esta herramienta extrae registros de la base de datos de la empresa y los procesa para su análisis en programas de analytics. Con una interfaz intuitiva y funciones avanzadas, esta aplicación optimiza la toma de decisiones y maximiza el rendimiento empresarial.",
      enterprise : "cliente kenworth del este",
      image : "../../../../assets/images/kweimg1.png"
    },
    {
      id : 1,
      name : "Desarrollo de escritorio",
      description : "Desarrollo de una aplicación de escritorio con Python, adaptada para comercios. Esta herramienta ofrece gestión de inventario, ventas y generación de informes financieros, todo en una interfaz intuitiva y flexible.",
      enterprise : "cliente individual",
      image : "../../../../assets/images/posimg1.png"
    },
    {
      id : 1,
      name : "Desarrollo web",
      description : "Presentación de productos para e-commerce utilizando Angular. Esta práctica se centra en destacar los productos de manera efectiva, con una interfaz simple pero atractiva para una experiencia de navegación intuitiva.",
      enterprise : "proyecto de práctica",
      image : "../../../../assets/images/comerimg1.png"
    },
    {
      id : 1,
      name : "Investigación y redacción",
      description : "Me especializo en la creación de tesis, memorias, proyectos de investigación y trabajos escolares. Mi enfoque se centra en construir contenido académico de alta calidad, desde la formulación de hipótesis hasta el análisis de datos, garantizando resultados excepcionales que cumplen con los estándares académicos más exigentes.",
      enterprise : "cliente individual",
      image : "../../../../assets/images/word.svg"
    },

  ]
  aparecer: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const element = document.getElementById('tuElemento');
    if (element) {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = element.offsetTop;

      if (scrollPosition > elementPosition) {
        this.aparecer = true;
      }
    }
  }
}
