import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  timeslots: string[] = [
    '10:00 - 10:30 AM',
    '11:00 - 11:30 AM',
    '12:00 - 12:30 PM',
    '1:00 - 1:30 PM',
    '2:00 - 2:30 PM',
    // Add more timeslots as needed
  ];
  sessionId: string = '';
  bookedBy: string = '';
  selectedDate: string = '';
  selectedTimeslot: string = '';

  constructor(private bookService: BookingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   
    this.route.snapshot.paramMap.get('id');
    this.sessionId = localStorage.getItem('id') || '';
    console.log('Session IDlocal:', this.sessionId);
    this.bookedBy = localStorage.getItem('userid') || '';
  }
    
    // Fetch data or perform any initialization here
  

  selectTimeslot(timeslot: string) {
    // Handle the selection of timeslot
    this.selectedTimeslot = timeslot;
    console.log('Selected timeslot:', timeslot);
  }

  bookRoom() {

    const roomId = this.route.snapshot.paramMap.get('id') || '';
    const date = this.getSelectedDate(); // Implement this method to get selected date from calendar
    const timeSlot = this.getSelectedTimeslot(); // Implement this method to get selected timeslot
    console.log('Room ID:', roomId);
    console.log('Date:', date);
    console.log('session:', String(this.sessionId));
    console.log('Booked By:', this.bookedBy);

    this.bookService.createBook(Number(roomId),Number(this.sessionId), this.bookedBy, date, timeSlot).subscribe(
      (response) => {
        // Handle success response
        console.log('Room booked successfully:', response);
      },
      (error) => {
        // Handle error response
        console.error('Error booking room:', error);
      }
    );
  }

  getSelectedDate(): string {
    return this.selectedDate || ''; // Use the selectedDate property
  }
  
  getSelectedTimeslot(): string {
    return this.selectedTimeslot || ''; // Use the selectedTimeslot property
  }

}
