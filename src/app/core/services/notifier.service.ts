import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

interface MyCustomNotification {
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  private notifier$ = new Subject<MyCustomNotification>();

  constructor() { 
    this.notifier$.subscribe({
      next: (myNotification) => {
        Swal.fire(
          myNotification.title, 
          myNotification.message, 
          myNotification.type)
      }
    })
  }

  showSuccess(message: string, title = 'Exito'): void {
    this.notifier$.next({
      type: 'success',
      message,
      title
    })
  }

  showError(message: string, title = 'Eliminado'): void {
    this.notifier$.next({
      type: 'error',
      message,
      title
    })
  }

  showErrorLogin(message: string, title = 'Invalido'): void {
    this.notifier$.next({
      type: 'error',
      message,
      title
    })
  }

  showErrorServer(message: string, title = 'Error de conexión con el Servidor'): void {
    this.notifier$.next({
      type: 'error',
      message,
      title
    })
  }
}
