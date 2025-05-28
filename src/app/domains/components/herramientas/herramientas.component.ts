import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneradorQRComponent } from '../generador-qr/generador-qr.component';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [
    CommonModule,
    GeneradorQRComponent
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
  ];

  abrir_herramienta(component: any){
    this.componente_actual = component;
  }
}
