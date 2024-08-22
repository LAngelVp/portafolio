import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnLlamadaAcionComponent } from '../../shared/btn-llamada-acion/btn-llamada-acion.component';

@Component({
  selector: 'app-info-trabajos-investigacion',
  standalone: true,
  imports: [CommonModule, BtnLlamadaAcionComponent],
  templateUrl: './info-trabajos-investigacion.component.html',
  styleUrl: './info-trabajos-investigacion.component.css'
})
export class InfoTrabajosInvestigacionComponent {
  titulo : string = 'Optimizando tu trabajo';
  descripcion : string = 'Optimiza tu Trabajo Académico: Aprovecha al máximo las herramientas tecnológicas para organizar, analizar y presentar tu investigación. Desde el uso eficiente de Excel hasta presentaciones impactantes, cada detalle cuenta para alcanzar la excelencia académica.';
  subtitulo : string = 'Revoluciona tus trabajos Académicos';
  descripcion_subtitulo : string = 'Descubre por qué la tecnología es tu mejor aliada para mejorar tus trabajos académicos. Sigue leyendo para ver cómo puede hacer que tus investigaciones sean más impactantes y efectivas.';
  img1 = '../../../../assets/images/ideas.png';

  areas_importantes_del_software = [
    {
      nombre : 'Transforma tu Investigación con Herramientas Efectivas',
      descripcion : 'Descubre cómo mi experiencia en el uso de Microsoft Office, Google Docs, Sheets, Slides y otras herramientas de administración puede llevar tus trabajos académicos al siguiente nivel. Te muestro cómo dominar estas plataformas para mejorar la organización, análisis y presentación de tus investigaciones, garantizando resultados más claros y profesionales.',
      imagen : '../../../../assets/images/tareas_documentos.png'
    },
    {
      nombre : 'Servicios Especializados para Trabajos Académicos y de Investigación',
      descripcion : 'Ofrezco asistencia integral para una variedad de trabajos académicos, incluyendo proyectos de investigación, ensayos, informes, estudios de caso, revisiones de literatura, propuestas de investigación y resúmenes. Con un enfoque en la redacción clara y la organización eficaz, garantizo que cada tarea se realice con el más alto nivel de profesionalismo. Permíteme ayudarte a lograr el éxito en tus proyectos escolares.',
      imagen : '../../../../assets/images/tareas_investigacion.png'
    },
    {
      nombre : 'Consultoría y Asesoría Académica Profesional',
      descripcion : 'Ofrezco servicios de consultoría y asesoría para proyectos de investigación, trabajos académicos, ensayos y propuestas. Desde la definición de temas y objetivos hasta la revisión y mejora de documentos, proporciono orientación experta para optimizar tus investigaciones y escritos. Confía en mi experiencia para recibir el apoyo necesario y alcanzar tus metas académicas con éxito.',
      imagen : '../../../../assets/images/tareas_consultor.png'
    },
  ]
}
