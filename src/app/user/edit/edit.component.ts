import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { User } from '../models/user';
import { Deptos } from '../models/Deptos';
import { UserService } from 'src/app/core/service/user.service';
import { CataloguesService } from 'src/app/core/service/catalogues.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {
  @Input() userEdit: User;
  @Input() deptos: Deptos[];
  @Input() phones: string[];
  @Output() clearEdit = new EventEmitter<any>();
  @Output() refresh = new EventEmitter<string>();
  catalogueDeptos: Deptos[];
  mapDepartmentsMod = new Set<number>();
  code: number;
  response: Response;
  id: number;
  name: string;
  paterno: string;
  materno: string;
  address: string;
  mail: string;
  constructor(private userService: UserService, private cataloguesService: CataloguesService) {
  }

  ngOnInit() {
    this.getDeptos();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes["userEdit"] != undefined) {
      if (changes["userEdit"].currentValue != undefined) {
        this.viewUser(changes["userEdit"].currentValue);
      }
    }
  }
  viewUser(user: User): void {
    this.id = user.id;
    this.name = user.name;
    this.paterno = user.paterno;
    this.materno = user.materno;
    this.address = user.address;
    this.mail = user.mail;
    this.response = new Response();
  }
  updateUser(user: User) {
    this.userService.updateUser(user).subscribe(u => {
      console.log(u);
      this.code = u.code;
      this.response = u;
      this.refresh.emit();
    });
  }
  getDeptos() {
    this.cataloguesService.getDepartments().subscribe(d => {
      this.catalogueDeptos = d.data;
    });
  }
  departamentoMod(indice: number) {
    if (this.mapDepartmentsMod.has(this.deptos[indice].id)) {
      this.mapDepartmentsMod.delete(this.deptos[indice].id);
    } else {
      this.mapDepartmentsMod.add(this.deptos[indice].id);
    }

  }
  clearModal() {
    console.log("clear modal");
    this.name = "";
    this.paterno = "";
    this.materno = "";
    this.address = "";
    this.mail = "";
    this.clearEdit.emit();
  }

}
