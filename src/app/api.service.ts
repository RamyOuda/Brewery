import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url = 'https://api.openbrewerydb.org/breweries?per_page=10';

  getData() {
    return this.http.get<any>(this.url);
  }
}
