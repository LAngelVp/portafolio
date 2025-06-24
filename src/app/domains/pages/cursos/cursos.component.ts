import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-cursos',
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './cursos.component.html',
    styleUrl: './cursos.component.css'
})
export class CursosComponent {
  lista_cursos = [
    {
      id: 1,
      nombre: 'Fundamentos de Excel',
      descripcion: 'En Fundamentos de Excel aprenderás a usar fórmulas, funciones básicas, formatos de celda, gráficos, filtros y ordenamiento de datos para optimizar tareas y análisis en hojas de cálculo.',
      ruta: "fundamentos-excel"
    }
  ]
}
