import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  postApiCall(endpoint : string, data: any){
    return this.http.post(environment.BASE_URL + endpoint, data);
  }
  getApiCall(endpoint : string){
    return this.http.get(environment.BASE_URL + endpoint);
  }
}
