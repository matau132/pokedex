import { Component, OnInit } from '@angular/core';
// import { DemoService } from './../demo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit {
  data:any;
  constructor(private http:HttpClient) {
    
   }
   getData(){
    let url = 'https://pokeapi.co/api/v2/ability/?limit=3';
    this.http.get(url).subscribe(t=>{this.data=t});
  }

  ngOnInit(): void {
    this.getData();
    console.log(this.data);
  }



}
