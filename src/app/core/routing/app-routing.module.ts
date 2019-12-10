import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../estructuraGeneral/home/home.component';
import { UserComponent } from '../../user/user.component';
import { DepartmentComponent } from '../../department/department.component';

const ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "department",
    component: DepartmentComponent
  },
  {
    path: '',
    redirectTo: '/home/',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
