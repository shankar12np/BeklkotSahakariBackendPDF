import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckingAccountService {

  private baseUrl = 'http://localhost:8080/checking-account';


  constructor(private http: HttpClient) { }

  getAllActivities(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  // saveActivities(data: any): Observable<any>{
  //   return this.http.get(this.baseUrl, data);
  // }

  downloadPDF(): Observable<Blob> {
    return this.http.get(this.baseUrl + '/download', { responseType: 'blob' });
  }


}
