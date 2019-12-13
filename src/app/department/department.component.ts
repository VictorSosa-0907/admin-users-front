import { Component, OnInit, Output } from '@angular/core';
import { CataloguesService } from '../core/service/catalogues.service';
import { Deptos } from '../user/models/Deptos';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Output() deptos: Deptos [];
  constructor(private catalogService: CataloguesService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments() {
    this.catalogService.getDepartments().subscribe(dep => {
      this.deptos = dep.data;
      console.log(this.deptos);
    });
  }

}
