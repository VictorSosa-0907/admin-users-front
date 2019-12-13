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
import { DetailComponent } from './user/detail/detail.component';
import { EditComponent } from './user/edit/edit.component';
import { DeleteComponent } from './user/delete/delete.component';
import { NewComponent } from './user/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    UserComponent,
    DepartmentComponent,
    DetailComponent,
    EditComponent,
    DeleteComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
