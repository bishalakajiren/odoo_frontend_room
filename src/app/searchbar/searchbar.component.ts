import { Component, OnInit } from '@angular/core';
import { RoomService } from '../service/room.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchForm: FormGroup;
  rooms: any[] = [];
  sessionId: string = '';
  bookedBy: string = '';

  constructor(private roomService: RoomService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      location: ['']
    });
  }

  ngOnInit(): void {
    this.getAllRooms();
    this.sessionId = localStorage.getItem('id') || '';
    this.bookedBy = localStorage.getItem('userid') || '';
  }

  getSessionId(): string {
    return this.sessionId;
  }

  getBookedBy(): string {
    return this.bookedBy;
  }

  getAllRooms() {
    this.roomService.getAllroom().subscribe(
      (data: any[]) => {
        this.rooms = data;
      },
      (error) => {
        console.log('Error fetching rooms:', error);
      }
    );
  }

  onSubmit() {
    const location = this.searchForm.value.location.trim();
    if (location) {
      this.rooms = this.rooms.filter(room => room.location.toLowerCase().includes(location.toLowerCase()));
    } else {
      this.getAllRooms(); // Reset the rooms list if search input is empty
    }
  }
}
