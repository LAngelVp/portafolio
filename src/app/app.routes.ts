import { Routes } from '@angular/router';
import { HomeComponent } from './domains/pages/home/home.component';
import { NavFooterComponent } from './domains/shared/nav-footer/nav-footer.component';
import { NotFoundComponent } from './domains/shared/not-found/not-found.component';
import { BarraNavegacionComponent } from './domains/shared/barra-navegacion/barra-navegacion.component';
import { AboutMeComponent } from './domains/components/about-me/about-me.component';
import { ProjectsComponent } from './domains/components/projects/projects.component';
import { ContactMeComponent } from './domains/components/contact-me/contact-me.component';
import { TimelineComponent } from './domains/components/timeline/timeline.component';

export const routes: Routes = [
    {
    
        path: '',
        component: HomeComponent

    },
    {
        path: 'timeline',
        component: TimelineComponent
    },
    {
        path: 'about',
        component: AboutMeComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'contact',
        component: ContactMeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
    
];
