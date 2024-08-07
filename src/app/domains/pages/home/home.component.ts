import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { HeaderPersonalComponent } from '../../components/header-personal/header-personal.component';
import { ToolsUsedComponent } from '../../components/tools-used/tools-used.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ServicesBuyComponent } from '../../components/services-buy/services-buy.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';
import { WaveSpikesComponent } from '../../components/wave-spikes/wave-spikes.component';
import { BarraNavegacionComponent } from '../../shared/barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BarraNavegacionComponent,
    RouterLinkWithHref,
    RouterModule,
    HeaderPersonalComponent,
    ToolsUsedComponent,
    AboutMeComponent,
    ServicesBuyComponent,
    ProjectsComponent,
    WaveSpikesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
