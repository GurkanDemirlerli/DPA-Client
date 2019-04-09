import { FacultyService } from './../../services/faculty.service';
import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {
  LocationModel,
  AddLocationModel,
  UpdateLocationModel
} from 'src/app/models';

import {
} from 'src/app/enums';


@Component({
  selector: 'dpa-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})




export class LocationsComponent implements OnInit {



  displayDialog: boolean;

  item: LocationModel = {};

  selectedItem: LocationModel;

  newItem: boolean;

  items: LocationModel[];

  cols: any[];

  brItems: MenuItem[];


  dropdownOptions: any = {};

  selectedOptions: any = {};

  filters: { faculties: SelectItem[] } = {
    faculties: []
  };


  constructor(
    private locationService: LocationService,
    private facultyService: FacultyService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.locationService.getAll().subscribe((items) => {
      this.items = items;
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
    });

    this.cols = [
      { field: 'title', header: 'Derslik' },
      { field: 'facultyId', header: 'Fakülte' },
    ];

    this.brItems = [
      { label: 'Adil Çizelgeleme Sistemi', routerLink: ['/pages'] },
      { label: 'Derslikler' },
    ];

    this.fillDropdownOptions();
  }


  fillDropdownOptions() {

  }

  showDialogToAdd() {
    this.newItem = true;
    this.item = {};
    this.selectedOptions = {};
    this.displayDialog = true;
  }

  save() {
    console.log(this.item);
    let items = [...this.items];
    if (this.newItem) {
      let addModel: AddLocationModel = {
        title: this.item.title,
        facultyId: this.item.facultyId
      }
      this.locationService.add(addModel).subscribe((res) => {
        this.item.locationId = res.data;
        items.push(this.item);
        this.items = items;
        this.item = null;
        this.displayDialog = false;
        this.toastr.success('Derslik Başarıyla Eklendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Derslik eklenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {

      });
    } else {
      console.log(this.item);
      let updateModel: UpdateLocationModel = {
        title: this.item.title,
        facultyId: this.item.facultyId
      }
      let id = this.item.locationId;
      this.locationService.update(updateModel, id).subscribe(() => {
        items[this.items.indexOf(this.selectedItem)] = this.item;
        this.items = items;
        this.item = null;
        this.displayDialog = false;
        this.toastr.success('Derslik Başarıyla Güncellendi', 'Başarılı');
      }, (err) => {
        console.log(err);
        this.toastr.error("Derslik güncellenirken bir hata oluştu", "Sunucu Hatası");
      }, () => {

      });
    }

  }

  delete() {
    this.locationService.delete(this.selectedItem.locationId).subscribe(() => {
      let index = this.items.indexOf(this.selectedItem);
      this.items = this.items.filter((val, i) => i != index);
      this.item = null;
      this.displayDialog = false;
      this.toastr.success('Derslik Başarıyla Silindi', 'Başarılı');
    }, (err) => {
      console.log(err);
    }, () => {
      this.toastr.error("Derslik silinirken bir hata oluştu", "Sunucu Hatası");

    });
  }

  onRowSelect(event) {
    this.newItem = false;
    this.item = this.clone(event.data);
    this.displayDialog = true;
  }

  clone(f: LocationModel): LocationModel {
    let item = {};
    for (let prop in f) {
      item[prop] = f[prop];
    }
    return item;
  }

}
