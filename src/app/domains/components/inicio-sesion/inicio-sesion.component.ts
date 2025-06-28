import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FirebaseDbService } from '../../../services/firebase-db.service';

@Component({
  selector: 'app-inicio-sesion',
  imports: [
CommonModule, ReactiveFormsModule, RouterModule
  ],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
form = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required]
  });

  mostrarModal = false;
  mensajeModal = '';
  numeroContatoModal = "2713997432"
  esExito = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private firebaseService: FirebaseDbService
  ) {}

async iniciarSesion() {
  if (this.form.valid) {
    const { correo, contraseña } = this.form.value;
    const usuarios = await this.firebaseService.obtenerUsuarios();
    const usuario = usuarios.find(u => u.correo === correo && u.contraseña === contraseña);

    if (usuario) {
      if (usuario.estatus === true) {
        this.esExito = true;
        this.mensajeModal = 'Inicio de sesión exitoso.';
        this.mostrarModal = true;
        this.firebaseService.guardarUsuarioLogueado(usuario);
        setTimeout(() => this.router.navigate(['/cursos']), 1500);
      } else {
        this.esExito = false;
        this.mensajeModal = 'Tu cuenta aún no ha sido activada.\n' +
        'Comunicate al número de telefono o Whatsapp\n' +
        `${this.numeroContatoModal}\n` +
        'Tambien puedes comunicarte desde el apartado de contacto';
        this.mostrarModal = true;
      }
    } else {
      this.esExito = false;
      this.mensajeModal = 'Correo o contraseña incorrectos.';
      this.mostrarModal = true;
    }
  }
}
  cerrarModal() {
    this.mostrarModal = false;
  }
}
