import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent implements OnInit{
  formulario: FormGroup = this.fb.group({}); // Inicializar con un formulario vacío

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
      this.http.post('https://portafolio-luisperez.vercel.app/api/enviarcorreo', emailData)
        .subscribe(
          response => {
            console.log('Correo enviado exitosamente', response);
          },
          error => {
            console.error('Error al enviar el correo', error);
          }
        );
    } else {
      console.error('Formulario inválido');
    }
  }
}
