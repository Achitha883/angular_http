import { Component, OnInit } from '@angular/core';
import { PostDetailsService } from '../post-details.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = {};
  constructor(private postService: PostDetailsService) { }

  ngOnInit() {
      this.postService.getPosts().subscribe(res=>this.posts = (res));
      this.posts = Array.of(this.posts);
  }


}
