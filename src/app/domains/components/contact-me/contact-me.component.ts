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
export class ContactMeComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      numtelefono: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')]],
      asunto: ['', [Validators.required]],
      contexto: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  enviarmail() {
    if (this.formulario.valid) {
      this.http.post('/api/enviarcorreo', this.formulario.value)
        .subscribe(response => {
          console.log('Correo enviado exitosamente', response);
        }, error => {
          console.error('Error al enviar el correo', error);
        });
    } else {
      console.log('Formulario no válido');
    }
  }
}
