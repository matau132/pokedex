import { DemoService } from './../demo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css'],
})
export class PokeDetailComponent implements OnInit {
  poke: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private svc: DemoService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.svc.getDetail(id).subscribe((res) => this.getPoke(res));
  }
  getPoke(res) {
    this.poke = res;
  }
}
