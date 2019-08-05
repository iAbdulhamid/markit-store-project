import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Shared-Classes-and-Interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisteredUser } from '../Shared-Classes-and-Interfaces/registered-user';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpClient:HttpClient ) { }

  // login Store
  getUserData(userData):Observable<User> {
    console.log('user logged in...');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept' : '*/*'
      })
    };
    return this.httpClient.post<User>(`${environment.API_URL}/loginStore`, userData, httpOptions);
  }

  //  Store register
registerNewUser(registuser: RegisteredUser):Observable<RegisteredUser>{
  console.log('user register in...');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept' : '*/*'
    })
  };
  console.log('store register in database...');
  return this.httpClient.post<RegisteredUser>(`${environment.API_URL}/RegisterStore`,registuser, httpOptions);
}

// // Update User
// updateUser()
// {

// }
}

