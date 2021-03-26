import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private http: HttpClient) {}

  getData() {
    let url: string = 'https://pokeapi.co/api/v2/pokemon/?limit=30';
    return this.http.get(url);
  }

  getDetail(id) {
    let url: string = 'https://pokeapi.co/api/v2/pokemon/' + id;
    return this.http.get(url);
  }
}
