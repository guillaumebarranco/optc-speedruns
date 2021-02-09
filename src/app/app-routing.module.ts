import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AdminComponent,
  HomeComponent,
  LeaderboardComponent,
  LeaderboardsComponent,
  ScoresComponent,
  SubLeaderboardComponent,
} from './containers';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'leaderboards',
    children: [
      {
        path: '',
        component: LeaderboardsComponent,
      },
      {
        path: ':leaderboard',
        children: [
          {
            path: '',
            component: LeaderboardComponent,
          },
          {
            path: ':sub_leaderboard',
            children: [
              {
                path: '',
                component: SubLeaderboardComponent,
              },
              {
                path: ':category',
                component: ScoresComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
