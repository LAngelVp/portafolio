import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegistroServicesService {
  constructor(private firestore: Firestore) {}

  registrarUsuario(usuario: any) {
    const usuariosCollection = collection(this.firestore, 'usuarios');
    return addDoc(usuariosCollection, usuario);
  }
}
