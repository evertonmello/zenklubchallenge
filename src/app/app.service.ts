import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { 
  }

  getTimes(): Observable<Object>{
    return this.httpClient.get("http://localhost:3000/");
  }
}
