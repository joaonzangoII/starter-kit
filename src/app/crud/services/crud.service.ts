import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Tutorial } from '../models/tutorial';

const baseUrl = '/tutorials';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.httpClient.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseUrl);
  }

  findByTitle(title: string): Observable<any> {
    return this.httpClient.get(`${baseUrl}?title=${title}`);
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
