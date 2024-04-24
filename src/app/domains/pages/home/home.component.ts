import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeaderPersonalComponent } from '../../components/header-personal/header-personal.component';
import { ToolsUsedComponent } from '../../components/tools-used/tools-used.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ServicesBuyComponent } from '../../components/services-buy/services-buy.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLinkWithHref,
    RouterModule,
    NavBarComponent,
    HeaderPersonalComponent,
    ToolsUsedComponent,
    AboutMeComponent,
    ServicesBuyComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
