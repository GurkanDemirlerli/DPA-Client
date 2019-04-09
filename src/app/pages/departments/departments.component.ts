import { AuthService } from 'src/app/services';
import { DepartmentService } from './../../services/department.service';
import { FacultyService } from './../../services/faculty.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';


import {
  FacultyModel,
  AddDepartmanModel,
  UpdateDepartmanModel,
  DepartmanModel
} from 'src/app/models';



@Component({
  selector: 'dpa-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  faculty: FacultyModel;

  displayDialog: boolean;

  item: DepartmanModel = {};

  selectedItem: DepartmanModel;

  newItem: boolean;

  items: DepartmanModel[];

  cols: any[];

  brItems: MenuItem[];

  dropdownOptions: any = {};

  selectedOptions: any = {};

  filters: { faculties: SelectItem[] } = {
    faculties: []
  };

  constructor(
    private facultyService: FacultyService,
    private departmentService: DepartmentService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.departmentService.getAll().subscribe((departments) => {
      this.items = departments;
      this.facultyService.getAll().subscribe((faculties) => {
        this.filters.faculties.push({
          label: "Tümü",
          value: null
        });
        faculties.map((faculty) => {
          this.filters.faculties.push({
            label: faculty.title,
            value: faculty.facultyId
          });
        });
      });
    })

    this.cols = [
      { field: 'departmanCode', header: 'Kodu' },
      { field: 'title', header: 'Adı' },
      { field: 'facultyId', header: 'Fakülte' },
      { field: 'userId', header: "Bölüm Başkanı" }
    ];

    this.brItems = [
      { label: 'Adil Çizelgeleme Sistemi', routerLink: ['/pages/faculties'] },
      { label: 'Bölümler' }
    ];

    this.fillDropdownOptions();
  }

  fillDropdownOptions() {
    this.dropdownOptions.facultyOptions = [];
    this.dropdownOptions.userOptions = [];
    let facultyOptions = [];
    let userOptions = [];
    this.facultyService.getAll().subscribe((faculties) => {
      faculties.map((faculty) => {
        facultyOptions.push({
          "name": faculty.title,
          "code": faculty.facultyId
        });
      });
      this.dropdownOptions.facultyOptions = facultyOptions;
      this.authService.getAll().subscribe((users) => {
        users.map((user) => {
          userOptions.push({
            "name": user.name + " " + user.surname,
            "code": user.userId
          });
        });
        this.dropdownOptions.userOptions = userOptions;
      });
    });
  }


  showDialogToAdd() {
    this.newItem = true;
    this.item = {};
    this.selectedOptions = {};
    this.displayDialog = true;
  }

  save() {
    let departments = [...this.items];
    if (this.newItem) {
      let addDepartmanModel: AddDepartmanModel = {
        title: this.item.title,
        departmanCode: this.item.departmanCode,
        facultyId: this.item.facultyId
      }
      this.departmentService.add(addDepartmanModel).subscribe((res) => {
        this.item.departmanId = res.data;
        departments.push(this.item);
        this.items = departments;
        this.item = null;
        this.displayDialog = false;
        this.toastr.success('Bölüm Başarıyla Eklendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Bölüm eklenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {

      });
    } else {
      console.log(this.item);
      let updateDepartmanModel: UpdateDepartmanModel = {
        title: this.item.title,
        departmanCode: this.item.departmanCode,
        facultyId: this.item.facultyId,
        userId: this.item.userId
      }
      let id = this.item.departmanId;
      this.departmentService.update(updateDepartmanModel, id).subscribe(() => {
        departments[this.items.indexOf(this.selectedItem)] = this.item;
        this.items = departments;
        this.item = null;
        this.displayDialog = false;
        this.toastr.success('Bölüm Başarıyla Güncellendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Bölüm güncellenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {

      });
    }

  }

  delete() {
    this.departmentService.delete(this.selectedItem.departmanId).subscribe(() => {
      let index = this.items.indexOf(this.selectedItem);
      this.items = this.items.filter((val, i) => i != index);
      this.item = null;
      this.displayDialog = false;
      this.toastr.success('Bölüm Başarıyla Silindi', 'Başarılı');
    }, (err) => {
      console.log(err);
    }, () => {
      this.toastr.error("Bölüm silinirken bir hata oluştu", "Sunucu Hatası");

    });
  }

  onRowSelect(event) {
    this.newItem = false;
    this.item = this.clone(event.data);
    this.selectedOptions.facultyOptions = (this.dropdownOptions.facultyOptions as any[]).find((option) => option.code == this.selectedItem.facultyId);
    this.selectedOptions.userOptions = (this.dropdownOptions.userOptions as any[]).find((option) => option.code == this.selectedItem.userId);
    this.displayDialog = true;
  }

  clone(f: DepartmanModel): DepartmanModel {
    let department = {};
    for (let prop in f) {
      department[prop] = f[prop];
    }
    return department;
  }

}
