import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Blog } from './pages/blog/blog';
import { BlogDetails } from './pages/blog-details/blog-details';
import { NotFound } from './pages/not-found/not-found';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    title: 'عدسة | الرئيسية',
  },
  {
    path: 'blog',
    component: Blog,
    title: 'عدسة | المدونة',
  },
  {
    path: 'blog-details',
    component: BlogDetails,
    title: 'عدسة | تفاصيل المقال',
  },
  {
    path: '**',
    component: NotFound,
    title: 'عدسة | الصفحة غير موجودة',
  },
];