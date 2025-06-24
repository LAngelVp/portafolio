import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseDbService } from '../../../services/firebase-db.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-usuario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css'
})
export class AgregarUsuarioComponent {
form = this.fb.group({
    nombre: ['', Validators.required],
    apellidop: [''],
    apellidom: [''],
    correo: ['', [Validators.required, Validators.email]],
    telefono: [''],
    ciudad: [''],
    empresa: [''],
    ocupacion: [''],
    contraseña: ['', Validators.required],
    fecha_registro:[''],
    estatus:[false]
  });

  constructor(private fb: FormBuilder, private firebaseService: FirebaseDbService) {}

 async guardar() {
  if (this.form.valid) {
    const datos = {
      ...this.form.value,
      fecha_registro: new Date().toISOString(), // Fecha en formato ISO
      estatus: false // Aseguramos que siempre sea false
    };

    await this.firebaseService.agregarUsuario(datos);
    this.form.reset();
    alert('Usuario guardado en Firebase');
  }
}
}
