import { Component } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { CommonModule } from '@angular/common';
import { WaveSpikesComponent } from '../wave-spikes/wave-spikes.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    SocialMediaComponent,
    WaveSpikesComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contact_tittle:string='contacto';
  content_list:string[]=['acerca del autor','proyectos realizados', 'conocimientos','servicios que ofrece'];
}
