import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './domains/pages/home/home.component';
import { FooterComponent } from './domains/components/footer/footer.component';
import { BarraNavegacionComponent } from './domains/shared/barra-navegacion/barra-navegacion.component';

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
