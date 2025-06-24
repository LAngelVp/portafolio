import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-timeline',
    imports: [CommonModule],
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  @Output() showPopUp = new EventEmitter<any>();
  
  experiencia = [
    {
      puesto : 'Freelance',
      empresa : 'Independiente',
      descripcion : 'Implementación de conocimientos en software, Microsoft office, redes, gestión de proyectos',
      periodo : '2020 - 2021',
      linkAcercaDe : 'Pop1',
      img_check : '../../../../assets/images/check.svg',
      img_goal : '../../../../assets/images/goal.svg',
      detalles: [
        {
          actividad : 'Desarrollar software.'
        },
        {
          actividad : 'Desarrollar proyectos.'
        },
        {
          actividad : 'Realizar trabajos de Investigación y redacción.'
        },
        {
          actividad : 'Efectuar la Instalación y mantenimiento de CCTV.'
        },
        {
          actividad : 'Crear y administrar bases de datos.'
        },
        {
          actividad : 'Instalar y mantener cableado estructurado.'
        },
        {
          actividad : 'Ofrecer servicio de refuerzo académico.'
        }
      ],
      logros : [
        {
          nombre : 'Desarrollar aplicación móvil para una clínica médica con Angular y .NET.'
        },
        {
          nombre : 'Desarrollar un sistema web para ser implementado en una veterinaria con .NET y Angular.'
        },
        {
          nombre : 'Elaborar tesis y proyectos integradores para estudiantes.'
        }
      ]
      
    },
    {
      puesto : 'Soporte y desarrollo',
      empresa : 'Institución acádemica',
      descripcion : 'Administración de red, soporte, instalaciones CCTV y desarrollo',
      periodo : '2021 - 2021',
      linkAcercaDe : 'Pop2',
      img_check : '../../../../assets/images/check.svg',
      img_goal : '../../../../assets/images/goal.svg',
      detalles: [
        {
          actividad : 'Realizar soporte técnico.'
        },
        {
          actividad : 'Desarrollar aplicaciones de escritorio .'
        },
        {
          actividad : 'Solucionar problemas administrativos mediante el desarrollo de aplicaciones para automatizar procesos.'
        },
        {
          actividad : 'Realizar mantenimiento CCTV.'
        },
        {
          actividad : 'Brindar apoyó administrativo.'
        },
        {
          actividad : 'Instalar y mantener el cableado estructurado.'
        },
        {
          actividad : 'Asesorar en el uso de herramientas digitales.'
        }
      ],
      logros : [
        {
          nombre : 'Actualizar la infraestructura de red.'
        },
        {
          nombre : 'Realizar la actualización y mantenimiento de software en los centros de cómputo.'
        },
        {
          nombre : 'Crear una aplicación de escritorio para la administración escolar con .NET.'
        }
      ]
      
    },
    {
      puesto : 'Desarrollador Backend',
      empresa : 'Syfei',
      descripcion : 'Soporte a soluciones de codigo y creación de funcionalidades nuevas, bases de datos, etc',
      periodo : '2021 - 2022',
      linkAcercaDe : 'Pop3',
      img_check : '../../../../assets/images/check.svg',
      img_goal : '../../../../assets/images/goal.svg',
      detalles: [
        {
          actividad : 'Desarrollo de Apis'
        },
        {
          actividad : 'Manejo de Bases de Datos.'
        },
        {
          actividad : 'Implementación de lógica de negocio.'
        },
        {
          actividad : 'Integraciones de servicios externos.'
        },
        {
          actividad : 'Mantenimiento y depuración de código.'
        },
        {
          actividad : 'Colaboración en el diseño de la arquitectura.'
        },
        {
          actividad : 'Escritura de pruebas.'
        },
        {
          actividad : 'Documentación.'
        },
        {
          actividad : 'Soporte y actualización de aplicaciones.'
        },
        {
          actividad : 'Participación en reuniones de equipo.'
        }
      ],
      logros : [
        {
          nombre : 'Desarrollo de Api Restful con .Net.'
        }
      ]
      
    },
    {
      puesto : 'Administrador de servidores y desarrollo web',
      empresa : 'Kenworth del este',
      descripcion : 'Levantamiento y administración de servidores, desarrollo de software y bases de datos',
      periodo : '2022 - 2023',
      linkAcercaDe : 'Pop4',
      img_check : '../../../../assets/images/check.svg',
      img_goal : '../../../../assets/images/goal.svg',
      detalles: [
        {
          actividad : 'Ayudar al soporte técnico.'
        },
        {
          actividad : 'Administrar redes de datos y voz.'
        },
        {
          actividad : 'Desarrollar aplicaciones web, escritorio y móvil.'
        },
        {
          actividad : 'Realizar instalación y mantenimiento CCTV.'
        },
        {
          actividad : 'Administrar y levantar servidores.'
        },
        {
          actividad : 'Implementar metodología SCRUM.'
        },
        {
          actividad : 'Desarrollar consultas SQL.'
        },
        {
          actividad : 'Resolución de problemas.'
        },
        {
          actividad : 'Documentación y procedimiento.'
        },
      ],
      logros : [
        {
          nombre : 'Mejorar el rendimiento de los servidores.'
        },
        {
          nombre : 'Optimizar la seguridad.'
        },
        {
          nombre : 'Automatización de despliegues.'
        },
        {
          nombre : 'Desarrollo de funcionalidades web avanzadas.'
        },
        {
          nombre : 'Desarrollo de una intranet con el uso de PHP, CSS nativo, Javascript nativo y base de datos MySQL.'
        },
        {
          nombre : 'Creación de una aplicación de escritorio con C#, para automatizar la abstracción de datos dentro de archivos XML.'
        },
        {
          nombre : 'Levantamiento de servidor web y servidor de Firewall.'
        }
      ]
      
    },
    {
      puesto : 'Business Intelligence',
      empresa : 'Kenworth del este',
      descripcion : 'ETL para el analisis de datos, desarrollo de scripts para automatización de procesos, desarrollo de componentes de Salesforce, Excel, Bases de datos.',
      periodo : '2023',
      linkAcercaDe : 'Pop5',
      img_check : '../../../../assets/images/check.svg',
      img_goal : '../../../../assets/images/goal.svg',
      detalles: [
        {
          actividad : 'Crear reportes avanzados en excel.'
        },
        {
          actividad : 'Crear tableros y dashboards en Salesforce Analytics.'
        },
        {
          actividad : 'Construir consultas a la base de datos de la empresa, para la manipulación de información.'
        },
        {
          actividad : 'Implementar la metodología de SCRUM.'
        },
        {
          actividad : 'Implementar metodologías y herramientas de programación para agilizar el proceso de ETL de datos para todas las sucursales y concesionarios de Kenworth del Este.'
        },
        {
          actividad : 'Aportar conocimientos en ciencia de datos.'
        },
        {
          actividad : 'Programacion en Python.'
        },
        {
          actividad : 'Modelado de datos.'
        },
        {
          actividad : 'Desarrollo de KPI y métricas.'
        },
      ],
      logros : [
        {
          nombre : 'Desarrollar una aplicación de escritorio para la automatización del proceso de actualización de información, mediante la conexión a la base de datos interna de la empresa con el uso del lenguaje de programación python.'
        },
        {
          nombre : 'Desarrollo de funcionalidades personalizadas de Salesforce con el uso de HTML, JavaScript, CSS, SOQL y Apex.'
        },
        {
          nombre : 'Desarrollo de Dashboards estratégicos.'
        },
        {
          nombre : 'Optimización del proceso ETL.'
        },
        {
          nombre : 'Mejora de la calidad de datos.'
        }
      ]
      
    }
  ]
  mostrarPopUp(item: any) {
    this.showPopUp.emit(item); // Emitir el objeto completo
  }
}
