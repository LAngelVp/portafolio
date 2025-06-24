import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  formulario: FormGroup = this.fb.group({});

  // ── Estado del modal ───────────────
  modalVisible = false;
  modalTitulo = '';
  modalMensaje = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    numtelefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    asunto: ['', Validators.required],
    contexto: ['', [Validators.required, Validators.minLength(10)]],
  });
  }

  enviarmail(): void {
    if (!this.formulario.valid) {
      this.abrirModal(
        'Formulario inválido',
        'La información que está brindando no es correcta, favor de corregir los datos.'
      );
      return;
    }

    const emailData = this.formulario.value;
    this.http.post('https://apicorreos.vercel.app/enviarcorreo', emailData).subscribe({
      next: () => {
        this.abrirModal(
          '¡Correo enviado!',
          'Será contactado a su número de teléfono o correo electrónico en un lapso máximo de 24 h.'
        );
        this.formulario.reset();
      },
      error: () => {
        this.abrirModal(
          'Error al enviar',
          'Hubo un problema al enviar el correo. Intente de nuevo más tarde.'
        );
      }
    });
  }

  /** Muestra el modal con un título y mensaje */
  private abrirModal(titulo: string, mensaje: string): void {
    this.modalTitulo = titulo;
    this.modalMensaje = mensaje;
    this.modalVisible = true;
  }

  /** Cierra el modal */
  cerrarModal(): void {
    this.modalVisible = false;
  }
}
