import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private http: HttpClient) { }

  getData() {
    let url = 'https://pokeapi.co/api/v2/ability/?limit=20';
    return this.http.get(url);
  }
}
