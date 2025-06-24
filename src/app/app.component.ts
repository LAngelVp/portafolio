import { Component } from '@angular/core';
import { HomeComponent } from './domains/pages/home/home.component';
import { BarraNavegacionComponent } from './domains/shared/barra-navegacion/barra-navegacion.component';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        BarraNavegacionComponent,
        RouterOutlet
    ],
    template: `
    <app-barra-navegacion></app-barra-navegacion>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}
