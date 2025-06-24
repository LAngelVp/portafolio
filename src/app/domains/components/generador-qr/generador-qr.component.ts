import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import QRCodeStyling from 'qr-code-styling';

@Component({
  standalone: true,
    selector: 'app-generador-qr',
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './generador-qr.component.html',
    styleUrl: './generador-qr.component.css'
})
export class GeneradorQRComponent {
@ViewChild('qrContainer', { static: true }) qrContainer!: ElementRef;
  url: string = '';
  logoDataUrl: string = '';
  qrCode!: QRCodeStyling;

  ngAfterViewInit() {
    this.qrCode = new QRCodeStyling({
      width: 600,
      height: 600,
      type: 'canvas',
      data: '',
      image: '',
      dotsOptions: {
        color: '#000',
        type: 'rounded'
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 5,
        imageSize: 0.2, 
      }
    });

    this.qrCode.append(this.qrContainer.nativeElement);
  }

  generarQR() {
    this.qrCode.update({
      data: this.url,
      image: this.logoDataUrl || ''
    });
  }

  onLogoSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.logoDataUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  exportarQR() {
  this.qrCode.download({
    name: 'qr-code',
    extension: 'png'
  });
}
}
