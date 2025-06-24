import { Component } from '@angular/core';
import { FirebaseDbService } from '../services/firebase-db.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  imports: [
    CommonModule
  ],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
usuarios: any[] = [];

  constructor(private firebaseService: FirebaseDbService) {}

  // async ngOnInit() {
  //   this.usuarios = await this.firebaseService.obtenerUsuarios();
  // }
}
