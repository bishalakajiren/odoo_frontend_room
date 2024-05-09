import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './service/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private sessionService: SessionService) {}

  // joinSession() {
  //   this.sessionService.generateToken().subscribe(
  //     (response: any) => {
  //       // Save token data to local storage
  //       localStorage.setItem('tokendata', response.tokendata);
  //       localStorage.setItem('userId', response.userId);
  //       localStorage.setItem('expiryDate', response.expiryDate);
  //       // Navigate to AppRoomComponent
  //       this.router.navigate(['/app-room']);
  //     },
  //     error => {
  //       console.error('Error:', error);
  //       // Handle error if needed
  //     }
  //   );
  // }
}
