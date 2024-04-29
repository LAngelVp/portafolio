import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  carrera:string="ingeniero en sistemas computacionales";
  especialidad:string="ingenieria de software";
  description_personal : string = 'Soy una persona especializada en Ingeniería de Software, con trayectoria en la implementación de soluciones tecnológicas que mejoran la eficiencia de las empresas. He demostrado habilidades excepcionales en el diseño y desarrollo de software, destacando en la resolución efectiva de problemas y la automatización de procesos. contribuyendo así al éxito de los proyectos. Mi compromiso con el aprendizaje continuo me ha permitido mantenerme actualizado con las últimas tendencias y metodologías en el campo, garantizando soluciones innovadoras. Ademas de mi experiencia técnica, soy apasionado por seguir evolucionando profesionalmente';
  image:string="https://scontent.fver3-1.fna.fbcdn.net/v/t39.30808-6/440582557_122095029074301135_5375404954591471127_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHOv6Yk6fbBZ1C83jzY0HOFeo20jcZn4LN6jbSNxmfgs8a45jU4yuPgxXczxKhkWpOhLuBilItHKzi6F8fUuMq7&_nc_ohc=daMCJGi0SoEAb4FCWGM&_nc_ht=scontent.fver3-1.fna&oh=00_AfCA5PXpKH4EqJVlCa-l0WJ-HqKJKpJNDw1RG59JONNt9w&oe=66349DD6";
}
