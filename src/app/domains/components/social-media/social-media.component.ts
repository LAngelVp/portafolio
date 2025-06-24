import { Component } from '@angular/core';
import { SocialMedia } from '../../models/social_media';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
    selector: 'app-social-media',
    imports: [
        RouterModule,
        CommonModule
    ],
    templateUrl: './social-media.component.html',
    styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  array_image_social_media: SocialMedia[] = [
    {
      name : 'github',
      link : 'https://github.com/LAngelVp',
      image : 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg'
    },
    {
      name : 'facebook',
      link : 'https://www.facebook.com/profile.php?id=61559034054491',
      image : 'https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg'
    },
    {
      name : 'instagram',
      link : 'https://www.instagram.com/angelperezdev',
      image : 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg'
    },
    {
      name : 'linkedin',
      link : 'https://www.linkedin.com/in/luis-%C3%A1ngel-vallejo-p%C3%A9rez-ingsoft/',
      image : 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-3.svg'
    }
    
  ];
}
