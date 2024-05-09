import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000'); // Connect to your backend server
  }

  // Emit an event to the server
  emitEvent(eventName: string, data: any): void {
    this.socket.emit(eventName, data);
  }

  // Listen to an event from the server
  onEvent(eventName: string): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on(eventName, (data: any) => {
        observer.next(data);
      });
    });
  }
}
