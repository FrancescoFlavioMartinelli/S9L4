import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-dettagli-component',
  templateUrl: './dettagli-component.component.html',
  styleUrls: ['./dettagli-component.component.css']
})
export class DettagliComponentComponent implements OnInit {

  p:any

  // 1 - creare un Subscription -> import da rxjs
  sub!:Subscription

  // 2 - ottenere dai parametri l'ActivatedRoute
  constructor(private router:ActivatedRoute, private postSrv:PostsService) { }

  ngOnInit(): void {
    // 3 - assegnare a sub il subscribe() su i parametri del router 
    // all'interno di subscribe passare come parametro una funzoine che ha come parametro i *parametri del router* che p un array associativo
    this.sub = this.router.params.subscribe((pars)=>{
      //Possiamo leggere un parametro dal router con +pars["key"] -> key sarebbe :key nei path indicati nel app-routing.module.ts
      let id = +pars["id"]


      //infine letto l'id seleziono l'elemento da visualizzare (this.p è la proprietà che uso nel template)
      this.p = this.postSrv.getPostById(id);
      
      
      //Solitamente quando vogliamo vedere i dettagli di un oggetto da un array chiediamo al service di darci quell'elemento
      // this.p = this.postSrv.getPostById(id)
    })
  }

}
