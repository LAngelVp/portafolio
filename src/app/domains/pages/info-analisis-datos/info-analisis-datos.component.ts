import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnLlamadaAcionComponent } from '../../shared/btn-llamada-acion/btn-llamada-acion.component';

@Component({
    selector: 'app-info-analisis-datos',
    imports: [
        CommonModule,
        BtnLlamadaAcionComponent
    ],
    templateUrl: './info-analisis-datos.component.html',
    styleUrl: './info-analisis-datos.component.css'
})
export class InfoAnalisisDatosComponent {
  titulo : string = 'Analisis de datos';
  descripcion : string = 'Convierte tus datos en tu ventaja competitiva. Con nuestro análisis experto, obtenemos insights claros y accionables para que tomes decisiones informadas, optimizando cada paso hacia el éxito de tu negocio.';
  img1 : string = '../../../../assets/images/analisisDatos1.png';

  lista_etl = [
    {
      titulo : 'Extracción (Extract)',
      detalles : 'Primero, recopilamos todos los datos relevantes para tu negocio desde diversas fuentes, ya sea desde tus bases de datos, aplicaciones, archivos o sistemas externos. Nuestro objetivo es asegurar que toda la información necesaria esté disponible para su posterior análisis.',
      imagen : '../../../../assets/images/servidoresDatos.jpg'
    },
    {
      titulo : 'Transformación (Transform)',
      detalles : 'Una vez que tenemos los datos, los procesamos y refinamos para que sean uniformes y compatibles con tus sistemas. Esto incluye limpiar los datos, convertirlos a los formatos correctos, y consolidar la información para que sea coherente y lista para su uso, asegurando que la calidad de los datos sea óptima.',
      imagen : '../../../../assets/images/transformacionDatos.jpg'
    },
    {
      titulo : 'Carga (Load)',
      detalles : 'Finalmente, cargamos estos datos transformados en un sistema de destino, como tu data warehouse o plataforma de análisis. Esto garantiza que la información esté lista y disponible para su análisis, permitiéndote acceder a ella en el formato que necesitas para tomar decisiones estratégicas y optimizar tu negocio.',
      imagen : '../../../../assets/images/presentacionDatos.jpg'
    },
  ]
}
