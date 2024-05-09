import { Component, OnInit } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookingview',
  templateUrl: './bookingview.component.html',
  styleUrls: ['./bookingview.component.css']
})
export class BookingviewComponent implements OnInit {
  bookingDetails: any;

  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('Booking ID:', id);
      this.getBookingDetails(id);
    }
  }

  getBookingDetails(id: string): void {
    this.bookingService.getbyidbook(id).subscribe(
      (data: any) => {
        this.bookingDetails = data;
        console.log('Booking details:', this.bookingDetails);
      },
      (error) => {
        console.log('Error fetching booking details:', error);
      }
    );
  }
}
