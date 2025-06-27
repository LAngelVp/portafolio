import { Component } from '@angular/core';
import { GeneradorQRComponent } from '../generador-qr/generador-qr.component';
import { CommonModule } from '@angular/common';
import { DataGenerateComponent } from '../data-generate/data-generate.component';

@Component({
  standalone: true,
    selector: 'app-herramientas',
    imports: [
        CommonModule
    ],
    templateUrl: './herramientas.component.html',
    styleUrl: './herramientas.component.css'
})
export class HerramientasComponent {
  componente_actual : any = null;
  lista_herramientas = [
    {
      nombre : "Generador QR",
      descripcion : "Herramienta para generar un codigo de QR a partir de una url",
      componente : GeneradorQRComponent
    },
    {
      nombre : "Generador de Datos Falsos",
      descripcion : "Herramienta interactiva para crear datos simulados personalizados con columnas y tipos configurables, exportables a Excel o CSV.",
      componente : DataGenerateComponent
    },
  ];

  abrir_herramienta(component: any){
    this.componente_actual = component;
  }
}
