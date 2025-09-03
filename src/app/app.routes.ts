import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'Beautero KENNE - Portfolio'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then(m => m.Home)
  },{
    path: 'about',
    loadComponent: () => import('./features/about/about').then(m => m.About)
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/project/project').then(m => m.Project),
    title: 'Beautero KENNE - Projects'
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog/blog').then(m => m.Blog),
    title: 'Beautero KENNE - Blog'
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./features/blog/blog-post/blog-post').then(m => m.BlogPostComponent)
  },
  { 
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then(c => c.Contact),
    title: 'Contact - Beautero KENNE'
  },
  { 
    path: '**', 
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound)
  }
];