import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError, Subject, tap} from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class BookingService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })};

       


    constructor(private http: HttpClient) { }

    createBook(roomId: number, sessionId: number, bookedBy: string,date: string,timeSlot: string,): Observable<any> {
        const url = `${environment.base_url}apibooking/createbook`; // Construct the URL with the user ID
        const token = localStorage.getItem('tokendata');
        const headers = new HttpHeaders({
          'authorization': `${token}`
        });
        const body = { "roomId": roomId, "sessionId": sessionId, "date": date, "timeSlot": timeSlot, "bookedBy": bookedBy }; // Request body containing the new value of is_creator
        return this.http.post(url, body,{ headers: headers } ).pipe(
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
        );
      }
       
    getAllbooking(): Observable<any[]> {
        // Retrieve token from localStorage
        const token = localStorage.getItem('tokendata');
        console.log(token);
        
        // Create authorization header
        const headers = new HttpHeaders({
          'authorization': `${token}`
        });
      
        // Make POST request to the API endpoint
        return this.http.post(environment.base_url + 'apibooking/getallbook', {}, { headers: headers }).pipe(map((response: any) => response.data), // Extract the 'data' field from the response
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
        );
      }

      getbyidbook(id: string): Observable<any> {
      
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
        return this.http.post(`${environment.base_url}apibooking/getidbook/${id}`, {}, { headers: headers }).pipe(
          map((response: any) => response), // Extract the 'data' field from the response
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
        );
      }

}

         
          
        


