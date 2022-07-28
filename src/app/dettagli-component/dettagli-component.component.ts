import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dettagli-component',
  templateUrl: './dettagli-component.component.html',
  styleUrls: ['./dettagli-component.component.css']
})
export class DettagliComponentComponent implements OnInit {

  p:any

  posts = [
    {id:0, title: "a", body:"aaa"},
    {id:1, title: "b", body:"bbb"},
    {id:2, title: "c", body:"ccc"}
  ];

  // 1 - creare un Subscription -> import da rxjs
  sub!:Subscription

  // 2 - ottenere dai parametri l'ActivatedRoute
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((pars)=>{
      let id = +pars["id"]
      this.p = this.posts.filter((e)=>e.id==id)[0]
    })
  }

}
