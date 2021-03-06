import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  AngularSlickgridModule, SlickPaginationComponent,
  AngularSlickgridComponent, FilterService, FilterFactory,
  SlickgridConfig, GridService, ExtensionService,
  AutoTooltipExtension, ExtensionUtility, SharedService, CellExternalCopyManagerExtension, CheckboxSelectorExtension, ColumnPickerExtension, DraggableGroupingExtension, ExportService, GraphqlService, GridEventService, GridStateService, GroupingAndColspanService, ResizerService, SortService, GridMenuExtension, GroupItemMetaProviderExtension
} from 'angular-slickgrid';
import { AppRoutingModule } from './core/routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './estructuraGeneral/home/home.component';
import { NavBarComponent } from './estructuraGeneral/nav-bar/nav-bar.component';
import { FooterComponent } from './estructuraGeneral/footer/footer.component';
import { HeaderComponent } from './estructuraGeneral/header/header.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickgridComponent } from './slickgrid/slickgrid.component';
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
    SlickgridComponent,
    DetailComponent,
    EditComponent,
    DeleteComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSlickgridModule.forRoot(),
    HttpClientModule
  ],
  providers: [AngularSlickgridComponent, SlickPaginationComponent,
    FilterService, FilterFactory, SlickgridConfig, GridService,
    ExtensionService, AutoTooltipExtension, ExtensionUtility,
    SharedService, CellExternalCopyManagerExtension, CheckboxSelectorExtension,
    ColumnPickerExtension, DraggableGroupingExtension,
    ExportService, GraphqlService, GridEventService, GridStateService,
    GroupingAndColspanService, ResizerService, SortService,
    GridMenuExtension, GroupItemMetaProviderExtension,
    AngularSlickgridModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
