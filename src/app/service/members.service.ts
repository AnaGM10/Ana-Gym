import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMember } from '../interfaces/imember';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  apiUrl="http://localhost:3000"
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

getMember():Observable<IMember[]>{
  return this.http.get<IMember[]>(this.apiUrl+'/members');

}

}