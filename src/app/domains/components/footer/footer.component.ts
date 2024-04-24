import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  fondo_src: string = 'https://th.bing.com/th/id/OIG4.S5a7zp_zqTlhEYFR4DuT?pid=ImgGn';
  contact_tittle:string='contacto';
  redes_contacto:string[]=[];
}
