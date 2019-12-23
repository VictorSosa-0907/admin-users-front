import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { Column, GridOption, AngularGridInstance, FieldType, Editors, Formatters, OnEventArgs, Filters, GridOdataService } from 'angular-slickgrid';
import * as XLSX from 'xlsx';
import { User } from '../user/models/user';
import { Deptos } from '../user/models/Deptos';
import { UserService } from '../core/service/user.service';
import { CataloguesService } from '../core/service/catalogues.service';


@Component({
  selector: 'app-slickgrid',
  templateUrl: './slickgrid.component.html',
  styleUrls: ['./slickgrid.component.css']
})
export class SlickgridComponent implements OnInit {
  userlist: User[];
  deptos: Deptos[];

  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  gridPaginationOptions: GridOption = {};
  dataset: any[] = [];
  angularGrid: AngularGridInstance;
  file: File;
  arrayBuffer: any;
  consecutivo: number = 0;
  arrayRows: number[] = [];
  @ViewChild("button", null)
  openButton: ElementRef;
  mensaje: string = "Hola";
  showPagination = true;

  data: any;
  odataVersion = 2;
  // departments: any[] = [
  //   { 
  //   value: 'Título', 
  //   label: 'Título' }, 
  //   { 
  //     value: 'Capítulo', 
  //     label: 'Capítulo' 
  //   }, 
  //   { 
  //     value: 'Sección', 
  //     label: 'Sección' },
  // { 
  //   value: 'Subsección', 
  //   label: 'Subsección' 
  // }];
  departments: any[] = [];

  constructor(private userService: UserService, private catalogService: CataloguesService) {
  }
  getDepartments() {
    this.catalogService.getDepartments().subscribe(dep => {
      this.deptos = dep.data;
      this.departments = [];
      for (let i = 0; i < this.deptos.length; i++) {
        this.departments[i] = {
          value: this.deptos[i].id,
          label: this.deptos[i].descrip,
        };
      }
    });
  }
  getAllUsers(): void {
    this.userService.getUsers().subscribe(usr => {
      this.userlist = usr.data;
      this.dataset = [];
      for (let i = 0; i < this.userlist.length; i++) {
        this.dataset[i] = {
          id: this.userlist[i].id,
          Nombre: this.userlist[i].name,
          Paterno: this.userlist[i].paterno,
          Materno: this.userlist[i].materno,
          Direccion: this.userlist[i].address,
          Email: this.userlist[i].mail,
          Telefono: this.userlist[i].phones,
          Departamento: this.userlist[i].department
        };
      }
    });
  }

  ngOnInit() {
    this.columnDefinitions = [
      { id: 'No', name: 'No', field: 'No', width: 5, type: FieldType.number, sortable: true },
      { id: 'name', name: 'Nombre', field: 'Nombre', width: 30, type: FieldType.string, editor: { model: Editors.text } },
      { id: 'apat', name: 'Paterno', field: 'Paterno', width: 30, type: FieldType.string, editor: { model: Editors.text } },
      { id: 'amat', name: 'Materno', field: 'Materno', width: 30, type: FieldType.string, editor: { model: Editors.text } },
      { id: "dir", name: 'Direccion', field: 'Direccion', width: 60, type: FieldType.string, editor: { model: Editors.text } },
      { id: "mail", name: 'Email', field: 'Email', width: 30, type: FieldType.string, editor: { model: Editors.text } },
      { id: "phone", name: 'Telefono', field: 'Telefono', width: 20, type: FieldType.string, editor: { model: Editors.text } },
      { id: "depto", name: 'Departamento', field: 'Departamento', width: 30, type: FieldType.string, editor: { model: Editors.singleSelect, collection: this.departments } },
      {
        id: 'edit',
        field: 'edit',
        excludeFromHeaderMenu: true,
        formatter: Formatters.infoIcon,
        minWidth: 20,
        maxWidth: 20,
        // use onCellClick OR grid.onClick.subscribe which you can see down below
        onCellClick: (e: Event, args: OnEventArgs) => {
          this.data = args.dataContext;
          this.openButton.nativeElement.click();
        }
      }
    ];
    this.gridOptions = {
      enableAutoResize: true,       // true by default
      enableCellNavigation: true,
      emulatePagingWhenScrolling: true,
      enablePagination: true,
      rowHeight: 30,
      editable: true,
      autoEdit: true,
      enableCheckboxSelector: true,
      enableRowSelection: true,
      rowSelectionOptions: {
        selectActiveRow: false
      },
      enableFiltering: true,
      minRowBuffer: 10,
      pagination: {
        pageSizes: [10, 25, 100],
        pageSize: 5,
        totalItems: 1000
      },
      rowDetailView: {
        cssClass: 'detail-view-toggle',
        panelRows: 1,
        keyPrefix: '__',
        useRowClick: true,
        useSimpleViewportCalc: true,
        saveDetailViewOnScroll: false,
        // the following 2 property/method should always be override by the user
        process: undefined,
        viewComponent: null
      },
      topPanelHeight: 35,
    };
    this.getAllUsers();
    console.log(this.dataset);


    this.gridPaginationOptions = {
      pagination: {
        pageSizes: [10, 15, 20, 25, 30, 40, 50, 75, 100],
        pageSize: 5,
        totalItems: 1000
      }
    };
  }

  angularGridReady(angularGrid: AngularGridInstance) {
    this.angularGrid = angularGrid;
  }

  incomingfile(event) {
    this.file = event.target.files[0];
  }

  upload(): void {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.setData(XLSX.utils.sheet_to_json(worksheet, { raw: false }));
    }
    fileReader.readAsArrayBuffer(this.file);
  }

  setData(data: any[]): void {
    let valuesArray: any[];
    this.dataset = [];
    for (let i = 0; i < data.length; i++) {
      valuesArray = Object.values(data[i]);
      console.log(valuesArray);
      this.consecutivo = parseInt(valuesArray[0]);
      this.dataset[i] = {
        No: valuesArray[0],
        Nombre: valuesArray[1],
        Paterno: valuesArray[2],
        Materno: valuesArray[3],
        Direccion: valuesArray[4],
        Email: valuesArray[5],
        Telefono: valuesArray[6],
        Departamento: valuesArray[7]
      }

    }
    this.angularGrid.dataView.refresh();
  }

  clear(): void {
    this.dataset = [];
    this.angularGrid.dataView.refresh();
    this.file = null;
    this.consecutivo = 0;
  }

  send(): void {
    console.log(this.dataset);
  }

  add(): void {
    this.consecutivo = this.consecutivo + 1;
    const registro = {
      id: this.consecutivo,
      consecutivo: this.consecutivo,
      Nombre: "",
      Paterno: "",
      Materno: "",
      Direccion: "",
      Email: "",
      Telefono: "",
      Departamento: null

    };
    // this.angularGrid.gridService.addItem(registro);
    this.angularGrid.dataView.addItem(registro);
  }

  delete(): void {
    let id: number;
    for (let i = 0; i < this.arrayRows.length; i++) {
      // console.log(this.dataset[this.arrayRows[i]].id);
      id[i] = this.dataset[this.arrayRows[i]].id;
    }
    this.angularGrid.gridService.deleteItemById(id);
  }

  onSelectedRowsChanged(e, args) {
    this.arrayRows = args.rows;
    // console.log(this.arrayRows);
  }

  evento(): void {
    this.openButton.nativeElement.click();
    console.log(this.mensaje);
  }
}
