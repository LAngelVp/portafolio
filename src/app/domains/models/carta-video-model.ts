export interface CartaVideoModel {
      id: number;
      nombre: string;
      descripcion: string;
    //   fecha: string;
      link: string;
      videoId?: string; // Opcional: extraer solo el ID del video de YouTube
}
