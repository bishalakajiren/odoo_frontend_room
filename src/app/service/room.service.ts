import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError, Subject, tap} from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class RoomService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })};

       


    constructor(private http: HttpClient) { }


        createRoom(name: string, capacity: number, location: string, description: string): Observable<any> {
          const url = `${environment.base_url}apiroom/addrooms`; // Construct the URL with the user ID
          const token = localStorage.getItem('tokendata');
          const headers = new HttpHeaders({
            'authorization': `${token}`
          });
          const body = { "name": name, "capacity": capacity, "location": location, "description": description }; // Request body containing the new value of is_creator
          return this.http.post(url, body,{ headers: headers } ).pipe(
            catchError((error: HttpErrorResponse) => {
              return throwError(error);
            })
          );
        }

        deleteRoom(id: string): Observable<any> {
          const token = localStorage.getItem('tokendata');
          const headers = new HttpHeaders({
            'authorization': `${token}`
          });
          return this.http.delete(`${environment.base_url}apiroom/deleterooms/${id}`, { headers: headers }).pipe(
            catchError((error: HttpErrorResponse) => {
              return throwError(error);
            })
          );
        }

        
        getbyidroom(id: string): Observable<any> {
          const token = localStorage.getItem('token');
          const headers = new HttpHeaders({
            'authorization': `${token}`
          });
          return this.http.delete(`${environment.base_url}topics/deleteTopicById/${id}`, { headers: headers }).pipe(
            catchError((error: HttpErrorResponse) => {
              return throwError(error);
            })
          );
        }


        getAllroom(): Observable<any[]> {
            // Retrieve token from localStorage
            const token = localStorage.getItem('tokendata');
            console.log(token);
            
            // Create authorization header
            const headers = new HttpHeaders({
              'authorization': `${token}`
            });
          
            // Make POST request to the API endpoint
            return this.http.post(environment.base_url + 'apiroom/getrooms', {}, { headers: headers }).pipe(map((response: any) => response.data), // Extract the 'data' field from the response
              catchError((error: HttpErrorResponse) => {
                return throwError(error);
              })
            );
          }

       

         
          
        
}

