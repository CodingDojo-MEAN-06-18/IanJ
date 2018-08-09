import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Manager from './teammanager';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full'
  },
  {
    path: 'players',
    component: Manager.teammanagerComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: Manager.PlayerListComponent,
      },
      {
        path: 'add',
        component: Manager.PlayerAddComponent,
      }
  ]
},
{
  path: 'games',
  component: Manager.teammangerComponent,
  children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: '1',
      },
      {
        path: ':game',
        component: Manager.GameComponent,
      }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
