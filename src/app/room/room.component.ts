import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent  {


  constructor(private router: Router, private sessionService: SessionService) {}

  joinSession() {
    this.sessionService.generateToken().subscribe(
      (response: any) => {
        // Save token data to local storage
        localStorage.setItem('tokendata', response.tokendata);
        localStorage.setItem('userid', response.userid);
        localStorage.setItem('expiry_Date', response.expiry_Date);
        localStorage.setItem('id', response.id);
        // Navigate to AppRoomComponent
        this.router.navigate(['/app-roomview']);
      },
      error => {
        console.error('Error:', error);
        // Handle error if needed
      }
    );
  }
}
