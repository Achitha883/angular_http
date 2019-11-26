import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostDetailsService } from '../post-details.service';

import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments={};
  constructor(private PostDetails:PostDetailsService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.PostDetails.getComments(id).subscribe(res => this.comments=res);
    this.comments = Array.of(this.comments);
    
  }
  

}
