import { Routes } from '@angular/router';
import { HomeComponent } from './domains/pages/home/home.component';
import { NavFooterComponent } from './domains/shared/nav-footer/nav-footer.component';
import { NotFoundComponent } from './domains/shared/not-found/not-found.component';
import { BarraNavegacionComponent } from './domains/shared/barra-navegacion/barra-navegacion.component';
import { AboutMeComponent } from './domains/components/about-me/about-me.component';

export const routes: Routes = [
    {
    
        path: '',
        component: HomeComponent

    },
    {
        path: 'about',
        component: AboutMeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
    
];
