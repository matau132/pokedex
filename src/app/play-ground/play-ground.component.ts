import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { DemoService } from './../demo.service';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css'],
})
export class PlayGroundComponent implements OnInit {
  data: Pokemon[] = [];
  p: number = 1;
  constructor(private svc: DemoService, private route: Router) {}

  ngOnInit(): void {
    this.svc.getData().subscribe((res) => this.getData(res));
  }

  getData(res) {
    this.data = res.results;
  }

  detail(pokemon) {
    let poke_id = pokemon.url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    this.route.navigate([this.route.url + '/detail/' + poke_id]);
  }
}
