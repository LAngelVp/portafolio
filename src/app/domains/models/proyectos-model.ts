export interface Tecnologia{
    nombre:string;
}

export interface ProyectosModel {
    img:string;
    titulo:string;
    descripcion: string;
    url_proyecto_github: string;
    url_proyecto_web: string;
    img_github: string;
    img_vista: string;
    tecnologias: Tecnologia[];
}
