import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private http: HttpClient) { }

  total() {
    let url: string = 'https://pokeapi.co/api/v2/pokemon/';
    return this.http.get(url);
  }

  getData(p) {
    let url: string = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + (p - 1) * 20;
    return this.http.get(url);
  }

  getDetail(id) {
    let url: string = 'https://pokeapi.co/api/v2/pokemon/' + id;
    return this.http.get(url);
  }
}
