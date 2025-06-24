import { Component, OnInit } from '@angular/core';
import { CursosExcelServiceService } from '../../../services/cursos-excel-service.service';
import { CommonModule } from '@angular/common';
import { CartaVideoComponent } from '../../components/carta-video/carta-video.component';


@Component({
    standalone: true,
    selector: 'app-cursos-excel',
    imports: [
        CommonModule,
        CartaVideoComponent
    ],
    templateUrl: './cursos-excel.component.html',
    styleUrl: './cursos-excel.component.css'
})
export class CursosExcelComponent implements OnInit{
  videos: any[] = [];

  constructor(private cursosService: CursosExcelServiceService) {}

  ngOnInit() {
      this.videos = this.cursosService.getAllVideos();
  }
}
