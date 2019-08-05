import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient:HttpClient ) { }

  //Get All Request
  GetAllRequests(token,storeDetails):Observable<Request[]>
  {
    console.log('getall Requests service ....');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept' : '*/*',
          'authorization': `bearer ${token}`
        })
      };
    return this.httpClient.post<Request[]>(`${environment.API_URL}/getAllRequests`,storeDetails,httpOptions);
  }

//getrequestes by id 
Getrequestbyid(proid,token):Observable<Request[]>
{
  console.log('get Request service ....');
  console.log();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept' : '*/*',
        'authorization': `bearer ${token}`
      })
    };
    console.log('get request ....');
    console.log(proid);
  return this.httpClient.get<Request[]>(`${environment.API_URL}/getRequestDetails/${proid}`,httpOptions);
}
}

