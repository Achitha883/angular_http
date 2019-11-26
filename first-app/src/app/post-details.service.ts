import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {

  constructor(private HttpClient: HttpClient) { }
  getPosts(){
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  getComments(id){
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments');
  }

}
