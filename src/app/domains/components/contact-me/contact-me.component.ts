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
  formulario: FormGroup = this.fb.group({});

  constructor(private fb : FormBuilder, private http : HttpClient){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      numtelefono : ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]')]],
      asunto : ['', [Validators.required]],
      contexto : ['', [Validators.required]],
    })
  }

  enviarmail() {
    if (this.formulario.valid) {
      this.http.post('/api/enviar-correo', this.formulario.value)
        .subscribe(response => {
          console.log('Correo enviado exitosamente', response);
        }, error => {
          console.error('Error al enviar el correo', error);
        });
    }
  }
}
