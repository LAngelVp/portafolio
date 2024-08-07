import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent
  ],
  templateUrl: './nav-footer.component.html',
  styleUrl: './nav-footer.component.css'
})
export class NavFooterComponent {

}
