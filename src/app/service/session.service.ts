import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError, Subject, tap} from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class SessionService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })};

       


    constructor(private http: HttpClient) { }

        
    generateToken(): Observable<any> {
        // Set up headers
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
    
        // Make POST request to the API endpoint
        return this.http.post<any>(`${environment.base_url}apisession/generateToken`, {}, { headers: headers })
          .pipe(
            map((response: any) => response.token), // Extract the 'data' field from the response
            catchError((error: HttpErrorResponse) => {
              return throwError(error);
            })
          );
      }
      getAllsession(): Observable<any[]> {
        // Retrieve token from localStorage
        const token = localStorage.getItem('tokendata');
        console.log(token);
        
        // Create authorization header
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
      
        // Make POST request to the API endpoint
        return this.http.get(environment.base_url + 'apisession/getAllSession', {}).pipe(map((response: any) => response.data), // Extract the 'data' field from the response
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
        );
      }
       

         
          
        
}

