import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormBuilder,
    FormGroup
  ],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  formulario: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      contexto: ['', Validators.required],
      nombre: ['', Validators.required],
      numtelefono: ['', Validators.required]
    });
  }

  enviarmail(): void {
    if (this.formulario.valid) {
      const emailData = this.formulario.value;
      this.http.post('https://apicorreos.vercel.app/enviarcorreo', emailData)
        .subscribe({
          next: (response) => {
            console.log('Correo enviado exitosamente', response);
            alert('¡El correo fue enviado de manera exitosa! \n Será contactado a su número de teléfono o correo electrónico en un lapso máximo de 24hrs.');
          },
          error: (error) => {
            console.error('Error al enviar el correo', error);
            alert('Error al enviar el correo');
          }
        });
      this.formulario.reset();
    } else {
      console.error('Formulario inválido');
      alert('La información que esta brindando no es correcta, favor de corregir los datos.');
    }
  }
}
