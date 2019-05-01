import { AuthService } from 'src/app/services';
import { DepartmentService } from './../../services/department.service';
import { FacultyService } from './../../services/faculty.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';


import {
  FacultyModel,
  AddDepartmentModel,
  UpdateDepartmentModel,
  DepartmentModel
} from 'src/app/models';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Roles } from 'src/app/enums';



@Component({
  selector: 'dpa-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  mform = new FormGroup({
    departmentCode: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    facultyId: new FormControl('', Validators.required),
  });

  faculty: FacultyModel;

  displayDialog: boolean;

  item: DepartmentModel = {};

  selectedItem: DepartmentModel;

  newItem: boolean;

  items: DepartmentModel[];

  cols: any[];

  brItems: MenuItem[];

  dropdownOptions: any = {};

  selectedOptions: any = {};

  filters: { faculties: SelectItem[] } = {
    faculties: []
  };
  loading: boolean = true;
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

      this.items.map((dp) => {
        this.facultyService.get(dp.facultyId).subscribe((fc) => {
          dp.faculty = fc;
          dp.facultyName = fc.title;
        });
      });

      this.items.map((dp) => {
        this.departmentService.getUsers(dp.departmentId).subscribe((uss) => {
          if (!uss[0].name === null) {
            uss.map((us) => {
              if (us.roles === Roles.Admin) {
                dp.head = us;
                dp.headName = us.name + ' ' + us.surname;
              }
            });
          }
        });
      });

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
        this.loading = false;
      });
    })

    this.cols = [
      { field: 'departmentCode', header: 'Kodu' },
      { field: 'title', header: 'Adı' },
      { field: 'facultyId', header: 'Fakülte', hlpr: "facultyName" },
      { field: 'userId', header: "Bölüm Başkanı", hlpr: "headName" }
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
          "label": faculty.title,
          "value": faculty.facultyId
        });
      });
      this.dropdownOptions.facultyOptions = facultyOptions;
      this.authService.getAll().subscribe((users) => {
        users.map((user) => {
          userOptions.push({
            "label": user.name + " " + user.surname,
            "value": user.userId
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

  save(e) {
    let departments = [...this.items];
    if (this.newItem) {
      let addDepartmentModel: AddDepartmentModel = {
        title: this.item.title,
        departmentCode: this.item.departmentCode,
        facultyId: this.item.facultyId
      }
      this.departmentService.add(addDepartmentModel).subscribe((res) => {
        this.item.departmentId = res.data;
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
      let updateDepartmentModel: UpdateDepartmentModel = {
        title: this.item.title,
        departmentCode: this.item.departmentCode,
        facultyId: this.item.facultyId,
        // userId: this.item.userId
      }
      let id = this.item.departmentId;
      this.departmentService.update(updateDepartmentModel, id).subscribe(() => {
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
    this.departmentService.delete(this.selectedItem.departmentId).subscribe(() => {
      let index = this.items.indexOf(this.selectedItem);
      this.items = this.items.filter((val, i) => i != index);
      this.item = null;
      this.displayDialog = false;
      this.toastr.success('Bölüm Başarıyla Silindi', 'Başarılı');
    }, (err) => {
      console.log(err);
      this.toastr.error("Bölüm silinirken bir hata oluştu", "Sunucu Hatası");
    }, () => {

    });
  }

  onRowSelect(event) {
    this.newItem = false;
    this.item = this.clone(event.data);
    this.selectedOptions.facultyOptions = (this.dropdownOptions.facultyOptions as any[]).find((option) => option.value == this.selectedItem.facultyId);
    this.selectedOptions.userOptions = (this.dropdownOptions.userOptions as any[]).find((option) => option.value == this.selectedItem.userId);
    this.displayDialog = true;
  }

  clone(f: DepartmentModel): DepartmentModel {
    let department = {};
    for (let prop in f) {
      department[prop] = f[prop];
    }
    return department;
  }

}
