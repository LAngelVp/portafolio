import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FirebaseDbService } from '../services/firebase-db.service';

export const activoGuard: CanActivateFn = async (route, state) => {
  const firebaseService = inject(FirebaseDbService);
  const router = inject(Router);

  // Obtener el usuario guardado localmente (solo su correo o uid)
  const usuarioLocal = await firebaseService.obtenerUsuarioLogueado();
  if (!usuarioLocal) {
    router.navigate(['/inicio-sesion']);
    return false;
  }

  // Obtener el usuario actualizado desde Firebase por correo o uid
  const usuarioActualizado = await firebaseService.obtenerUsuarioPorCorreo(usuarioLocal.correo);

  if (usuarioActualizado && usuarioActualizado.estatus === true) {
    return true;
  } else {
    router.navigate(['/inicio-sesion']);
    return false;
  }
};
