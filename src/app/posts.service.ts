import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts = [
    {id:0, title: "a", body:"aaa"},
    {id:1, title: "b", body:"bbb"},
    {id:2, title: "c", body:"ccc"}
  ];

  constructor() { }


  getPostById(id:number) {
    return this.posts.filter((e)=>e.id==id)[0]
  }
}
