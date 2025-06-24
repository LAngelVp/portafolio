import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './domains/pages/home/home.component';
import { NotFoundComponent } from './domains/shared/not-found/not-found.component';
import { BarraNavegacionComponent } from './domains/shared/barra-navegacion/barra-navegacion.component';
import { AboutMeComponent } from './domains/components/about-me/about-me.component';
import { ProjectsComponent } from './domains/components/projects/projects.component';
import { TimelineComponent } from './domains/components/timeline/timeline.component';
import { NgModule } from '@angular/core';
import { InfoDesarrolloSoftwareComponent } from './domains/pages/info-desarrollo-software/info-desarrollo-software.component';
import { InfoTrabajosInvestigacionComponent } from './domains/pages/info-trabajos-investigacion/info-trabajos-investigacion.component';
import { InfoAnalisisDatosComponent } from './domains/pages/info-analisis-datos/info-analisis-datos.component';
import { ProyectosComponent } from './domains/components/proyectos/proyectos.component';
import { HerramientasComponent } from './domains/components/herramientas/herramientas.component';
import { CursosExcelComponent } from './domains/pages/cursos-excel/cursos-excel.component';
import { CursosComponent } from './domains/pages/cursos/cursos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { AgregarUsuarioComponent } from './domains/components/agregar-usuario/agregar-usuario.component';
import { InicioSesionComponent } from './domains/components/inicio-sesion/inicio-sesion.component';
import { activoGuard } from './guards/activo.guard';
import { ContactMeComponent } from './domains/components/contact-me/contact-me.component';


export const routes: Routes = [
    {
    
        path: '',
        component: HomeComponent

    },
    { path: 'registro', component: AgregarUsuarioComponent },
    { path: 'inicio-sesion', component: InicioSesionComponent },
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
        path: 'p',
        component: ProyectosComponent
    },
    {
        path: 'herramientas',
        component: HerramientasComponent
    },
     {
        path: 'cursos',
        component: CursosComponent,
        canActivate: [activoGuard]
    },
    {
        path: 'cursos/fundamentos-excel',
        component: CursosExcelComponent,
        canActivate: [activoGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
    
];