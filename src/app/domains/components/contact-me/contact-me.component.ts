import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
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
      this.http.post('https://apicorreos.vercel.app/enviarcorreo', emailData)
        .subscribe(
          response => {
            console.log('Correo enviado exitosamente', response);
            alert('¡El correo fue enviado de manera exitosa! \n Será contactado a su número de teléfono o correo electrónico en un lapso máximo de 24hrs.'); // Mostrar alerta de éxito
          },
          error => {
            console.error('Error al enviar el correo', error);
            alert('Error al enviar el correo');
          }
        );
      } else {
        console.error('Formulario inválido');
        alert('La información que esta brindando no es correcta, favor de corregir los datos.');
      }
      this.formulario.reset(); 
  }
}
