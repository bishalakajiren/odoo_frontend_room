import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomviewComponent } from './roomview/roomview.component';
import { BookingviewComponent } from './bookingview/bookingview.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: 'app-room', component: RoomComponent },
      { path: 'app-roomview', component: RoomviewComponent }, // Add this route
      { path: 'booking/:id', component: BookingviewComponent },
      { path: 'app-view/:id/:sessionId/:bookedBy',component:ViewComponent },
      { path: '', redirectTo: 'app-room', pathMatch: 'full' } // Redirect to app-room component on root path
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
