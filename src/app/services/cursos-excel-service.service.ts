import { Injectable } from '@angular/core';
import { CartaVideoModel } from '../domains/models/carta-video-model';



@Injectable({
  providedIn: 'root'
})
export class CursosExcelServiceService {
  excel_basic: CartaVideoModel[] = [
    {
      id: 1,
      nombre: 'hablando de excel',
      descripcion: 'Descubre la interfaz de Excel y su importancia en este tutorial rápido 🚀 Aprende las partes clave como la cinta de opciones, barras de herramientas y celdas, junto con un poco de contexto histórico sobre esta poderosa herramienta.'  ,
      link: "https://www.youtube.com/watch?v=0rwp0DCSWnM",
      videoId: "0rwp0DCSWnM"
    },
  ]

  constructor() { }

  getAllVideos(): CartaVideoModel[] {
    return this.excel_basic;
  }
}
