import { Component, OnInit } from '@angular/core';
import { LocationModel } from 'src/app/models/location.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'dpa-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  // public educationTypesTableView = EducationTypesTableView;
  // public educationTypes = EducationTypes;

  displayDialog: boolean;

  item: LocationModel = {};

  selectedItem: LocationModel;

  newConstraint: boolean;

  items: LocationModel[];

  cols: any[];

  brItems: MenuItem[];


  dropdownOptions: any = {};

  selectedOptions: any = {};

  checkboxes: any = {
    isFreeDay: false,
    isActive: false
  };

  constructor() { }

  ngOnInit() {
  }

}
