import { Routes } from '@angular/router';
import { HomeComponent } from './domains/pages/home/home.component';
import { NavFooterComponent } from './domains/shared/nav-footer/nav-footer.component';
import { NotFoundComponent } from './domains/shared/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component:NavFooterComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
