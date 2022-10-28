import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url = 'https://api.openbrewerydb.org/breweries/random';

  getData() {
    return this.http.get<any>(this.url);
  }
}
