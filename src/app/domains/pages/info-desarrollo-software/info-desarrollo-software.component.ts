import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-desarrollo-software',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-desarrollo-software.component.html',
  styleUrl: './info-desarrollo-software.component.css'
})
export class InfoDesarrolloSoftwareComponent {
  img1 = '../../../../assets/images/programacion1.png';

  areas_importantes_del_software = [
    {
      nombre : 'Automatización de procesos',
      descripcion : 'Imagina reducir errores, ahorrar tiempo y enfocarte en lo que realmente importa. Con el software de automatización de procesos, puedes dejar atrás las tareas repetitivas y mejorar la eficiencia de tu negocio. Además, tendrás acceso a datos en tiempo real para tomar decisiones más inteligentes y mantenerte competitivo en un mercado en constante cambio.',
      imagen : '../../../../assets/images/automatizarProcesos.png'
    },
    {
      nombre : 'Gestión empresarial',
      descripcion : 'Gestionar tu empresa de manera efectiva es la clave para el éxito. La gestión empresarial te permite organizar recursos, tomar decisiones estratégicas y adaptarte a los cambios del mercado con agilidad. Con una buena gestión, optimizas procesos, impulsas la productividad y garantizas un crecimiento sostenible, asegurando que tu negocio no solo sobreviva, sino que prospere en un entorno competitivo.',
      imagen : '../../../../assets/images/empresarial.png'
    },
    {
      nombre : 'Inteligencia de negocios',
      descripcion : 'La inteligencia de negocios te da el poder de transformar datos en decisiones estratégicas. Al analizar información clave, puedes identificar oportunidades, anticipar tendencias y optimizar el rendimiento de tu empresa. Con BI, conviertes datos complejos en insights claros, lo que te permite tomar decisiones informadas y estratégicas que impulsan el crecimiento y te mantienen un paso adelante en el mercado.',
      imagen : '../../../../assets/images/inteligenciaNegocios.png'
    },
    {
      nombre : 'Comercio electronico',
      descripcion : 'El comercio electrónico abre la puerta a un mercado global, permitiéndote vender tus productos o servicios a cualquier hora y en cualquier lugar. Con una tienda en línea, puedes ofrecer una experiencia de compra personalizada, adaptada a las necesidades de cada cliente. Además, te permite aprovechar herramientas digitales para atraer, convertir y fidelizar a tus clientes, impulsando el crecimiento de tu negocio en un entorno digital competitivo.',
      imagen : '../../../../assets/images/ecommerce.png'
    },
    {
      nombre : 'Lógistica y transporte',
      descripcion : 'El software en logística y transporte revoluciona la forma en que gestionas y optimizas tus operaciones. Con soluciones automatizadas, puedes planificar rutas más eficientes, rastrear envíos en tiempo real y gestionar inventarios con precisión. Esto no solo reduce costos operativos, sino que también mejora la puntualidad de las entregas y aumenta la satisfacción del cliente, manteniendo tu negocio competitivo en un mercado exigente.',
      imagen : '../../../../assets/images/logisticaTransporte.png'
    },
    {
      nombre : 'Finanzas y contabilidad',
      descripcion : 'El software en finanzas y contabilidad transforma la gestión financiera de tu empresa, automatizando procesos como la facturación, el control de gastos y la generación de informes. Con herramientas avanzadas, puedes monitorear el flujo de caja en tiempo real, garantizar el cumplimiento normativo y tomar decisiones financieras más informadas. Esto no solo reduce errores humanos, sino que también mejora la eficiencia y la precisión, fortaleciendo la salud financiera de tu negocio.',
      imagen : '../../../../assets/images/finanzasContabilidad.png'
    }

  ]
}
