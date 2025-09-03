import { Injectable } from '@angular/core';
import { BlogPost } from '../../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getPosts(): BlogPost[] {
    return [
      { id: 1, title: 'New Things in Angular 20', content: 'Full content here...', date: new Date(), author: 'Beautero' },
    ];
  }

  getPostById(id: number): BlogPost | undefined {
    return this.getPosts().find(post => post.id === id);
  }
}
