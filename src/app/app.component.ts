import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './domains/pages/home/home.component';
import { BarraNavegacionComponent } from './domains/shared/barra-navegacion/barra-navegacion.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HomeComponent,
    BarraNavegacionComponent,
    RouterOutlet
  ],
  template: `
    <app-barra-navegacion></app-barra-navegacion>
    <router-outlet/>
  `
})
export class AppComponent {
  
}
