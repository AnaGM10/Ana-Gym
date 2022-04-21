import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<any> {
    const headers = new HttpHeaders()
      .set(
        'x-rapidapi-key',
        '59e82bd335msh3e2e767bbd0bdd5p16bf1ajsnc77b0f5094a2'
      )
      .set('x-rapidapi-host', 'exercisedb.p.rapidapi.com');
    const url = 'https://exercisedb.p.rapidapi.com/exercises ';

    return this.http.get<any>(url, { headers });
  }
}
