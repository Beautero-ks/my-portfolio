import { Component } from '@angular/core';
import { BlogPost } from '../../../models/blog-post';
import { BlogService } from '../../../core/service/blog';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [RouterModule, DatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

    ngOnInit() {
    this.posts = this.blogService.getPosts();
  }

  trackPost(index: number, post: BlogPost) {
    return post.id;
  }
}
