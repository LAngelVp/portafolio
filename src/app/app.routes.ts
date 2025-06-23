import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './domains/pages/home/home.component';
import { NotFoundComponent } from './domains/shared/not-found/not-found.component';
import { BarraNavegacionComponent } from './domains/shared/barra-navegacion/barra-navegacion.component';
import { AboutMeComponent } from './domains/components/about-me/about-me.component';
import { ProjectsComponent } from './domains/components/projects/projects.component';
import { ContactMeComponent } from './domains/components/contact-me/contact-me.component';
import { TimelineComponent } from './domains/components/timeline/timeline.component';
import { NgModule } from '@angular/core';
import { InfoDesarrolloSoftwareComponent } from './domains/pages/info-desarrollo-software/info-desarrollo-software.component';
import { InfoTrabajosInvestigacionComponent } from './domains/pages/info-trabajos-investigacion/info-trabajos-investigacion.component';
import { InfoAnalisisDatosComponent } from './domains/pages/info-analisis-datos/info-analisis-datos.component';
import { ProyectosComponent } from './domains/components/proyectos/proyectos.component';
import { HerramientasComponent } from './domains/components/herramientas/herramientas.component';
import { CursosExcelComponent } from './domains/pages/cursos-excel/cursos-excel.component';
import { CursosComponent } from './domains/pages/cursos/cursos.component';


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
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'contact',
        component: ContactMeComponent
    },
    {
        path: 'projects/desarrollo-software',
        component: InfoDesarrolloSoftwareComponent
    },
    {
        path: 'projects/trabajos-investigacion',
        component: InfoTrabajosInvestigacionComponent
    },
    {
        path: 'projects/analisis-de-datos',
        component: InfoAnalisisDatosComponent
    },
    {
        path: 'cursos',
        component: CursosComponent
    },
    {
        path: 'cursos/fundamentos-excel',
        component: CursosExcelComponent
    },
    {
        path: 'p',
        component: ProyectosComponent
    },
    {
        path: 'herramientas',
        component: HerramientasComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
    
];