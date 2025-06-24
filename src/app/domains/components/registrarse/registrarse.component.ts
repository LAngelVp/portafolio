import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addDoc, collection, Firestore } from 'firebase/firestore';
import { RegistroServicesService } from '../../../services/registro-services.service';

@Component({
  selector: 'app-registrarse',
  imports: [
    FormsModule
  ],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
  usuario = {
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    email: '',
    telefono: '',
    empresa: '',
    ciudad: '',
    ocupacion: '',
    fecha_registro: '',
    fecha_suscripcion: '',
    activo: ''
  };

  constructor(private registroService: RegistroServicesService) {}

  guardar() {
    this.registroService.registrarUsuario(this.usuario)
      .then(() => {
        alert('¡Usuario guardado exitosamente!');
        this.usuario = {
          nombre: '',
          apellido_paterno: '',
          apellido_materno: '',
          email: '',
          telefono: '',
          empresa: '',
          ciudad: '',
          ocupacion: '',
          fecha_registro: '',
          fecha_suscripcion: '',
          activo: ''
        };
      });
  }
}
