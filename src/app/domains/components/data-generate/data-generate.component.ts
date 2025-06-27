import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  { faker } from '@faker-js/faker'
interface ColumnaConfig {
  nombre: string;
  tipo: string;
}
@Component({
  selector: 'app-data-generate',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './data-generate.component.html',
  styleUrl: './data-generate.component.css'
})
export class DataGenerateComponent {
  columnas: ColumnaConfig[] = [];
  tiposDisponibles = [
    'nombre', 'apellido', 'nombre_completo', 'email', 'empresa', 'rfc',
    'ciudad', 'estado', 'direccion', 'telefono', 'fecha', 'texto',
    'numero', 'float', 'booleano'
  ];
  numFilas = 10;
  datosGenerados: any[] = [];

  agregarColumna() {
    this.columnas.push({ nombre: '', tipo: 'nombre' });
  }

  eliminarColumna(index: number) {
    this.columnas.splice(index, 1);
  }

  generarDatos() {
    this.datosGenerados = [];
    for (let i = 0; i < this.numFilas; i++) {
      const fila: any = {};
      for (let col of this.columnas) {
        fila[col.nombre] = this.generarDato(col.tipo);
      }
      this.datosGenerados.push(fila);
    }
  }

  generarDato(tipo: string): any {
    switch (tipo) {
      case 'nombre': return faker.name.firstName();
      case 'apellido': return faker.name.lastName();
      case 'nombre_completo': return faker.name.fullName();
      case 'email': return faker.internet.email();
      case 'empresa': return faker.company.name();
      case 'rfc': return faker.string.alphanumeric(13).toUpperCase();
      case 'ciudad': return faker.location.city();
      case 'estado': return faker.location.state();
      case 'direccion': return faker.location.streetAddress();
      case 'telefono': return faker.phone.number();
      case 'fecha': return faker.date.past().toISOString().split('T')[0];
      case 'texto': return faker.lorem.words(4);
      case 'numero': return faker.number.int({ min: 1, max: 9999 });
      case 'float': return parseFloat(faker.finance.amount({min: 1,max: 10000,dec: 2}));
      case 'booleano': return faker.datatype.boolean();
      default: return '';
    }
  }

  descargarCSV() {
    const encabezados = this.columnas.map(c => `"${c.nombre}"`).join(',');
    const filas = this.datosGenerados.map(fila =>
      this.columnas.map(c => `"${fila[c.nombre]}"`).join(',')
    );
    const contenido = [encabezados, ...filas].join('\n');
    const blob = new Blob([contenido], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'datos_generados.csv';
    link.click();
  }
}
