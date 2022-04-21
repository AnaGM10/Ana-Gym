import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserRegistration } from '../interfaces/user-auth';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  apiUrl="http://localhost:3000"
  user:IUserRegistration
  httpHeaders = {headers: new HttpHeaders({
                  'Content-Type': 'application/json'})
  }

constructor(private http:HttpClient) { }

createUser(user:IUserRegistration):Observable<IUserRegistration>{
  return this.http.post<IUserRegistration>(this.apiUrl+'/users',JSON.stringify(user),this.httpHeaders
  )
}

readAllUsers():Observable<IUserRegistration[]>{
  return this.http.get<IUserRegistration[]>(this.apiUrl+'/users')
}
}