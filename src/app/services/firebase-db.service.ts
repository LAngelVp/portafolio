import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from '@angular/core';
import { Database, ref, child, get, push, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {
private db = inject(Database);
  private injector = inject(EnvironmentInjector);

  agregarUsuario(usuario: any): Promise<void> {
    return runInInjectionContext(this.injector, async () => {
      const usuariosRef = ref(this.db, 'usuarios');
      const nuevoUsuarioRef = push(usuariosRef);
      await set(nuevoUsuarioRef, usuario);
    });
  }

  async obtenerUsuarios(): Promise<any[]> {
    const usuariosRef = ref(this.db, 'usuarios');
    const snapshot = await get(usuariosRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.entries(data).map(([id, usuario]) => {
        if (typeof usuario === 'object' && usuario !== null) {
          return { id, ...usuario };
        }
        return { id, usuario };
      });
    } else {
      return [];
    }
  }

  guardarUsuarioLogueado(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  // Método para obtener el usuario logueado (o null si no hay)
  async obtenerUsuarioLogueado(): Promise<any | null> {
    const usuarioStr = localStorage.getItem('usuario');
    if (!usuarioStr) return null;
    return JSON.parse(usuarioStr);
  }

  async obtenerUsuarioPorCorreo(correo: string): Promise<any | null> {
  const usuarios = await this.obtenerUsuarios(); // Tu método que obtiene todos los usuarios
  return usuarios.find(u => u.correo === correo) || null;
}
}
