import { Component } from '@angular/core';
import { ProyectosModel } from '../../models/proyectos-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  lista_proyectos: ProyectosModel[] = [
    {
      img: 'https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      titulo: 'Gestor de tareas',
      descripcion: 'Herramienta para la gestion de tareas, con la funcionalidad de poder crear y eliminar tareas. Ademas de poder realizar cambios de estado y de esa forma dar un mejor seguimiento al proceso de la actividad. Tambien cuenta con la funcionalidad de filtración de tareas en base a su estado.',
      url_proyecto_github: 'https://github.com/LAngelVp/gestor-de-tareas',
      url_proyecto_web: 'https://tareas-luisperez.vercel.app/',
      img_github: '../../../assets/images/github.svg',
      img_vista: '../../../assets/images/eye.svg',
      tecnologias: [
        {
          nombre : 'angular'
        },
        {
          nombre: 'sass'
        },
        {
          nombre: 'typescript'
        },
        {
          nombre: 'localStorage'
        },
        {
          nombre: 'bootstrap'
        },
      ]
    },
    {
      img: 'https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      titulo: 'Restaurante',
      descripcion: 'Una página web de restaurante desarrollada con Angular muestra un menú interactivo utilizando una API de comidas. Permite observar su apartado de platillos, contacto, un formulario de quejas y sugerencias, etc.',
      url_proyecto_github: 'https://github.com/LAngelVp/restaurante',
      url_proyecto_web: 'https://alquimia-culinaria.vercel.app/',
      img_github: '../../../assets/images/github.svg',
      img_vista: '../../../assets/images/eye.svg',
      tecnologias: [
        {
          nombre : 'angular'
        },
        {
          nombre: 'sass'
        },
        {
          nombre: 'typescript'
        },
        {
          nombre: 'API'
        },
        {
          nombre: 'bootstrap'
        },
      ]
    },
    {
      img: 'https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      titulo: 'Procesador de facturas XML a Excel',
      descripcion: 'Herramienta para la gestion de tareas, con la funcionalidad de poder crear y eliminar tareas. Ademas de poder realizar cambios de estado y de esa forma dar un mejor seguimiento al proceso de la actividad. Tambien cuenta con la funcionalidad de filtración de tareas en base a su estado.',
      url_proyecto_github: 'https://github.com/LAngelVp/ConvertidorC-',
      url_proyecto_web: '',
      img_github: '../../../assets/images/github.svg',
      img_vista: '../../../assets/images/eye.svg',
      tecnologias: [
        {
          nombre : '.NET'
        },
        {
          nombre: 'EXCEL'
        },
        {
          nombre: 'C#'
        },
        {
          nombre: 'WINDOW FORM'
        },
      ]
    },
    {
      img: 'https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      titulo: 'PROCESADOR DE DATOS',
      descripcion: 'Herramienta para la gestion de tareas, con la funcionalidad de poder crear y eliminar tareas. Ademas de poder realizar cambios de estado y de esa forma dar un mejor seguimiento al proceso de la actividad. Tambien cuenta con la funcionalidad de filtración de tareas en base a su estado.',
      url_proyecto_github: 'https://github.com/LAngelVp/ProccessRMPG73',
      url_proyecto_web: '',
      img_github: '../../../assets/images/github.svg',
      img_vista: '../../../assets/images/eye.svg',
      tecnologias: [
        {
          nombre : 'PYTHON'
        },
        {
          nombre: 'PYQT'
        },
        {
          nombre: 'PANDAS'
        },
        {
          nombre: 'ANALISIS DE DATOS'
        },
      ]
    },
    {
      img: 'https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      titulo: 'intranet',
      descripcion: 'Pagina web interna para el control de información de todos los departamentos de la empresa, con la finalidad de tener un concentrado de todo lo que consideren de importancia, asi como la facilidad de interacción con los empleados.',
      url_proyecto_github: 'https://github.com/LAngelVp/INTRANET_KENWORTH',
      url_proyecto_web: 'https://intranet-kenworth.vercel.app/',
      img_github: '../../../assets/images/github.svg',
      img_vista: '../../../assets/images/eye.svg',
      tecnologias: [
        {
          nombre : 'angular'
        },
        {
          nombre: 'typescript'
        },
        {
          nombre: 'sass'
        },
        {
          nombre: 'bootstrap'
        },
      ]
    },
    {
      img: 'https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      titulo: 'punto de venta',
      descripcion: 'Se desarrolló un sistema de punto de venta (POS) utilizando Python con SQLAlchemy para la gestión de datos, Alembic para las migraciones de base de datos, PostgreSQL como sistema de almacenamiento robusto y PyQt para crear una interfaz gráfica intuitiva. Este sistema permite manejar transacciones, gestionar inventarios y generar informes, proporcionando una solución completa y eficiente para la administración de ventas.',
      url_proyecto_github: 'https://gitlab.com/software-development-team5610819/DesktopPosWithPython',
      url_proyecto_web: '',
      img_github: '../../../assets/images/gitlab.svg',
      img_vista: '../../../assets/images/eye.svg',
      tecnologias: [
        {
          nombre : 'python'
        },
        {
          nombre: 'alembic'
        },
        {
          nombre: 'docker'
        },
        {
          nombre: 'postgresql'
        },
        {
          nombre: 'pyqt'
        },
        {
          nombre: 'sqlalchemy'
        },
      ]
    },
    {
      img: 'https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      titulo: 'Pagina web veterinaria',
      descripcion: 'Se desarrolló una página web para una veterinaria utilizando Laravel, un framework PHP. La plataforma incluye funcionalidades para la gestión de citas, historiales médicos, perfiles de mascotas y comunicación con clientes. Laravel facilita una arquitectura robusta y segura, permitiendo un diseño eficiente y escalable. La web proporciona una interfaz amigable y accesible para la administración de servicios veterinarios y la interacción con los propietarios de mascotas.',
      url_proyecto_github: 'https://github.com/LAngelVp/Pagina-de-Veterinaria-INSA/tree/master',
      url_proyecto_web: '',
      img_github: '../../../assets/images/github.svg',
      img_vista: '../../../assets/images/eye.svg',
      tecnologias: [
        {
          nombre : 'laravel'
        },
        {
          nombre: 'postgresql'
        },
        {
          nombre: 'bootstrap'
        },
        {
          nombre: 'php'
        }
      ]
    },
  ];

}
