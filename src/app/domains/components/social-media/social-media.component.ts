import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  array_image_social_media: string[] = [
    'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
    'https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg',
    'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg',
    'https://cdn.worldvectorlogo.com/logos/whatsapp-8.svg',
    'https://cdn.worldvectorlogo.com/logos/linkedin-icon-3.svg'
  ];
}
