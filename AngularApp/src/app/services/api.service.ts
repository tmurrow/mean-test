import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.local';
import { Student } from '../models';

const httpOptions = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  constructor(private http: HttpClient) { }

  get ApiBaseUrl(): string {
    return environment.api_url;
  }

  getStudents(): Observable<HttpResponse<Student[]>> {
    return this.http.get<Student[]>(this.ApiBaseUrl + 'students', { observe: 'response'});
  }

  // getStudent(id): Observable<HttpResponse<any>> {
  //   return this.http.get<any>(this.ApiBaseUrl+'students/' + id, {observe: 'response'});
  // }
}
