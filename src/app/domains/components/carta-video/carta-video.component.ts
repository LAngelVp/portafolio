import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-carta-video',
    imports: [
        CommonModule
    ],
    templateUrl: './carta-video.component.html',
    styleUrl: './carta-video.component.css'
})
export class CartaVideoComponent {
   @Input() video: any; // Recibe el objeto video desde el padre
  expandido = false;
  safeUrl: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Genera la URL segura usando el videoId del objeto video
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.video.videoId}`
    );
  }
}
