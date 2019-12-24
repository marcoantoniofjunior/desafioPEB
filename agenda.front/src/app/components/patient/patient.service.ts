import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from '../../environments/environment';

const ApiUrl = Environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) {
  }

  private getOptions(myParams?: HttpParams) {
    const httpClientDefaultHeader: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    const myOptions = { headers: httpClientDefaultHeader, params: myParams };
    return myOptions;
  }

  getList(): Observable<object> {
    return this.httpClient.get(`${ApiUrl}/patient/list`, this.getOptions());
  }

  getById(patient: any): Observable<object> {
    return this.httpClient.post(`${ApiUrl}/patient/getbyid`, JSON.stringify(patient), this.getOptions());
  }

  create(patient: any): Observable<object> {
    return this.httpClient.post(`${ApiUrl}/patient/create`, JSON.stringify(patient), this.getOptions());
  }

  edit(patient: any): Observable<object> {
    return this.httpClient.post(`${ApiUrl}/patient/edit`, JSON.stringify(patient), this.getOptions());
  }

  delete(patient: any): Observable<object> {
    return this.httpClient.post(`${ApiUrl}/patient/delete`, JSON.stringify(patient), this.getOptions());
  }

  getAnnotations(patient: any): Observable<object>{
    return this.httpClient.post(`${ApiUrl}/patient/getAnnotations`, JSON.stringify(patient), this.getOptions());
  }

  createAnnotation(annotation: any): Observable<object>{
    return this.httpClient.post(`${ApiUrl}/patient/deleteCreate`, JSON.stringify(annotation), this.getOptions());
  }

  deleteAnnotation(annotation: any): Observable<object>{
    return this.httpClient.post(`${ApiUrl}/patient/deleteAnnotation`, JSON.stringify(annotation), this.getOptions());
  }

}
