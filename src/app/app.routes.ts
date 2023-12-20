import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';

export const routes: Routes = [
  {
    title: 'Home component',
    path: 'home',
    component: HomeComponent,
  },
  {
    title: 'User component',
    path: 'users',
    component: UserComponent,
    children: [
      {
        path: 'user/:id',
        component: UserDetailsComponent,
      },
    ],
  },
  {
    title: 'About component',
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NoPageComponent,
  },
];
