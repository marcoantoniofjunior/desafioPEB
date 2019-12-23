import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from '../../environments/environment';

const ApiUrl = Environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  constructor(private httpClient: HttpClient) {}

  private getOptions(myParams?: HttpParams) {
    const httpClientDefaultHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const myOptions = { headers: httpClientDefaultHeader, params: myParams };
    return myOptions;
  }

  getListByPatientId(districts: string[]): Observable<object> {
    return this.httpClient.post(
      `${ApiUrl}/medicalconsultation/GetListByPatientId`,
      JSON.stringify(districts),
      this.getOptions()
    );
  }

  getList(): Observable<object> {
    return this.httpClient.get(
      `${ApiUrl}/medicalconsultation/district`,
      this.getOptions()
    );
  }

  // getById(medicalconsultation: any): Observable<object> {
  //   return this.httpClient.post(`${ApiUrl}/medicalconsultation/getbyid`, JSON.stringify(medicalconsultation), this.getOptions());
  // }

  create(medicalconsultation: any): Observable<object> {
    return this.httpClient.post(
      `${ApiUrl}/medicalconsultation/create`,
      JSON.stringify(medicalconsultation),
      this.getOptions()
    );
  }

  edit(medicalconsultation: any): Observable<object> {
    return this.httpClient.post(
      `${ApiUrl}/medicalconsultation/edit`,
      JSON.stringify(medicalconsultation),
      this.getOptions()
    );
  }

  delete(medicalconsultation: any): Observable<object> {
    return this.httpClient.post(
      `${ApiUrl}/medicalconsultation/delete`,
      JSON.stringify(medicalconsultation),
      this.getOptions()
    );
  }
}
