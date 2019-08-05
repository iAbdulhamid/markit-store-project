import { Injectable } from '@angular/core';
import { ResponseToUser } from '../Shared-Classes-and-Interfaces/response-to-user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Orders } from '../Shared-Classes-and-Interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class ResponsetouserService {

  constructor(private httpClient:HttpClient) { }

  sendResponseforUser( token,responeDetails:ResponseToUser):Observable<ResponseToUser[]>{
    console.log('Send ResponseToUser........');
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept' : '*/*',
        'authorization': `bearer ${token}`
      })
    };
    console.log('store register in database...');
    return this.httpClient.post<ResponseToUser[]>(`${environment.API_URL}/newResponse`,responeDetails, httpOptions);
  }

  // get all Accept Orders
  getAcceptsOrders(token,Store_Email):Observable<Orders[]>
  {
    console.log("email");
    console.log(Store_Email);
    console.log('get All Accepts Orders .........');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept' : '*/*',
          'authorization': `bearer ${token}`
        })
      };
console.log(Store_Email);
    return this.httpClient.post<Orders[]>(`${environment.API_URL}/getAllAcceptedResponses`,Store_Email,httpOptions);
  }
}
