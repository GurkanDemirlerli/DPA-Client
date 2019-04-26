import { FacultyService } from './../../services/faculty.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import {
  FacultyModel,
  UpdateFacultyModel,
  AddFacultyModel
} from 'src/app/models';


@Component({
  selector: 'dpa-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class FacultiesComponent implements OnInit {

  mform = new FormGroup({
    facultyCode: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  });

  displayDialog: boolean;

  faculty: FacultyModel = {};

  selectedFaculty: FacultyModel;

  newFaculty: boolean;

  faculties: FacultyModel[];

  cols: any[];

  items: MenuItem[];

  constructor(
    private facultyService: FacultyService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    //   this.mform = this.fb.group({
    //     'facultyCode': new FormControl('', Validators.required),
    //     'title': new FormControl('', Validators.required),
    // });

    this.facultyService.getAll().subscribe((faculties) => {
      this.faculties = faculties;
    })

    this.cols = [
      { field: 'facultyCode', header: 'Code', width: '20%' },
      { field: 'title', header: 'Title', width: '80%' }
    ];

    this.items = [
      { label: 'Adil Çizelgeleme Sistemi', routerLink: ['/pages/faculties'] },
      { label: 'Fakülteler', routerLink: ['/pages/faculties'] },
    ];
  }

  showDialogToAdd() {
    this.newFaculty = true;
    this.faculty = {};
    this.displayDialog = true;
  }

  save() {
    let faculties = [...this.faculties];
    if (this.newFaculty) {
      let addFacultyModel: AddFacultyModel = {
        title: this.faculty.title,
        facultyCode: this.faculty.facultyCode
      }
      this.facultyService.add(addFacultyModel).subscribe((res) => {
        this.faculty.facultyId = res.data;
        faculties.push(this.faculty);
        this.faculties = faculties;
        this.faculty = null;
        this.displayDialog = false;
        this.toastr.success('Fakülte Başarıyla Eklendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Fakülte eklenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {

      });
    } else {
      let updateFacultyModel: UpdateFacultyModel = {
        title: this.faculty.title,
        facultyCode: this.faculty.facultyCode
      }
      let id = this.faculty.facultyId;
      this.facultyService.update(updateFacultyModel, id).subscribe(() => {
        faculties[this.faculties.indexOf(this.selectedFaculty)] = this.faculty;
        this.faculties = faculties;
        this.faculty = null;
        this.displayDialog = false;
        this.toastr.success('Fakülte Başarıyla Güncellendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Fakülte güncellenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {
      });
    }

  }

  delete() {
    this.facultyService.delete(this.selectedFaculty.facultyId).subscribe(() => {
      let index = this.faculties.indexOf(this.selectedFaculty);
      this.faculties = this.faculties.filter((val, i) => i != index);
      this.faculty = null;
      this.displayDialog = false;
      this.toastr.success('Fakülte Başarıyla Silindi', 'Başarılı');
    }, (err) => {
      console.log(err);
    }, () => {
      this.toastr.error("Fakülte silinirken bir hata oluştu", "Sunucu Hatası");
    });
  }

  onRowSelect(event) {
    this.newFaculty = false;
    this.faculty = this.cloneFaculty(event.data);
    this.displayDialog = true;
  }

  cloneFaculty(f: FacultyModel): FacultyModel {
    let faculty = {};
    for (let prop in f) {
      faculty[prop] = f[prop];
    }
    return faculty;
  }

  goToDepartments() {
    this.router.navigate(['pages/departments', this.faculty.facultyId]);
  }

}
