import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './estructuraGeneral/home/home.component';
import { NavBarComponent } from './estructuraGeneral/nav-bar/nav-bar.component';
import { FooterComponent } from './estructuraGeneral/footer/footer.component';
import { HeaderComponent } from './estructuraGeneral/header/header.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSlickgridModule } from 'angular-slickgrid';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    UserComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSlickgridModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
