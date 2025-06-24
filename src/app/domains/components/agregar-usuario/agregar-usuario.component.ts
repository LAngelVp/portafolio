import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';      // 👈 NUEVO
import { FirebaseDbService } from '../../../services/firebase-db.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // 👈 añade RouterModule
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css'
})
export class AgregarUsuarioComponent {

  showModal = false;
  modalTitle = '';
  modalMessage = '';
  modalType: 'success' | 'error' = 'success';

  form = this.fb.group({
    nombre: ['', Validators.required],
    apellidop: [''],
    apellidom: [''],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/) ]],
    ciudad: [''],
    empresa: [''],
    ocupacion: [''],
    contraseña: ['', Validators.required],
    fecha_registro: [''],
    estatus: [false]
  });

  // ⬇️ Inyecta Router
  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseDbService,
    private router: Router
  ) {}

  async guardar() {
    if (this.form.invalid) return;

    const datos = {
      ...this.form.value,
      fecha_registro: new Date().toISOString(),
      estatus: false
    };

    try {
      await this.firebaseService.agregarUsuario(datos);

      /* Éxito: mostrar modal */
      this.modalTitle = '¡Registro exitoso!';
      this.modalMessage = 'Ahora puedes iniciar sesión.';
      this.modalType = 'success';
      this.showModal = true;

      /* Nota: la redirección se hace al cerrar el modal → closeModal() */
    } catch (e) {
      console.error('Error al guardar usuario:', e);

      /* Error: modal también */
      this.modalTitle = 'Error';
      this.modalMessage =
        'Ocurrió un problema al registrar. Intenta más tarde.';
      this.modalType = 'error';
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;

    /* Si fue éxito, redirige al login */
    if (this.modalType === 'success') {
      this.router.navigate(['/inicio-sesion'], {
        queryParams: { registro: 'exito' }
      });
    }
  }
}
