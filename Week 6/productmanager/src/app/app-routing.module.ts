import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductNewComponent } from './product-new/product-new.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },
  {
    path: 'list',
    pathMatch: 'full',
    component: ProductListComponent,
    children: []
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: ProductEditComponent,
    children: []
  },
  {
    path: 'add',
    pathMatch: 'full',
    component: ProductNewComponent,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
