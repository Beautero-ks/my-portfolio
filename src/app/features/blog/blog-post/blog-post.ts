import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../core/service/blog';
import { BlogPost } from '../../../models/blog-post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  imports: [DatePipe],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss'
})
export class BlogPostComponent implements OnInit{
  post?: BlogPost;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.blogService.getPostById(id);
  }
}
