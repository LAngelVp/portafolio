import { Component } from '@angular/core';

import { ServiceInterface } from '../../models/serviceInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-buy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-buy.component.html',
  styleUrl: './services-buy.component.css'
})
export class ServicesBuyComponent {
  array_services:ServiceInterface[]=[
    {
      name: "desarrollo web",
      description: "Nuestro servicio de desarrollo web ofrece soluciones personalizadas y funcionales, desde la creación de sitios estáticos hasta plataformas dinámicas y aplicaciones web. Diseño adaptativo, experiencia de usuario intuitiva y rendimiento óptimo son nuestras prioridades.",
      image:"../../../../assets/images/img4.svg"
    },
    {
      name: "trabajos de investigación",
      description: "Ofrecemos servicios de investigación académica rigurosos y precisos. Desde la revisión de literatura hasta la presentación de hallazgos, garantizamos documentos de alta calidad que contribuyen al avance del conocimiento en diversos campos.",
      image:"../../../../assets/images/img2.svg"
    },
    {
      name: "Automatización",
      description: "Ofrecemos soluciones personalizadas de automatización de procesos administrativos. Nuestro software a medida agiliza tareas repetitivas, mejora la eficiencia y reduce errores, adaptándose a las necesidades específicas de tu negocio para impulsar su crecimiento y productividad.",
      image:"../../../../assets/images/img6.svg"
    },
    {
      name: "analisis de datos",
      description: "Ofrecemos análisis de datos con software personalizado para visualización. Identificamos patrones y oportunidades de crecimiento. Toma decisiones informadas y estratégicas para alcanzar tus objetivos con nuestra herramienta de visualización de datos.",
      image:"../../../../assets/images/img5.svg"
    },
    {
      name: "instalación y mantenimiento CCTV",
      description: "Brindamos servicios integrales de instalación y mantenimiento de sistemas de cámaras CCTV. Desde la configuración inicial hasta la gestión continua, garantizamos la seguridad de tu espacio con soluciones confiables y eficientes, proporcionando tranquilidad y protección las 24 horas del día.",
      image:"../../../../assets/images/img7.svg"
    },
    {
      name: "asesoría",
      description: "Ofrezco asesoría personalizada para alcanzar tus metas. Analizo tus necesidades y objetivos, proporcionando soluciones estratégicas y prácticas que impulsen tu desarrollo personal y profesional. Juntos, creamos un camino hacia el éxito.",
      image:"../../../../assets/images/img8.svg"
    },
    {
      name: "app movil",
      description: "Desarrollamos apps móviles a medida para potenciar tu negocio. Desde la idea hasta el lanzamiento, ofrecemos soluciones innovadoras y de alto rendimiento que mejoran la experiencia del usuario y impulsan el crecimiento empresarial.",
      image:"../../../../assets/images/img3.svg"
    }
  ]
}
