import { MockServiceBase } from './mock.service.base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocationModel, AddLocationModel, UpdateLocationModel } from 'src/app/models';

@Injectable()
export class LocationMockService extends MockServiceBase<LocationModel, AddLocationModel, UpdateLocationModel> {


    constructor() {
        super("locationId", [
            {
                "locationId": 1,
                "title": "Derslik 1",
                "facultyId": 4
            },
            {
                "locationId": 2,
                "title": "Derslik 2",
                "facultyId": 4
            },
            {
                "locationId": 3,
                "title": "Loc 3",
                "facultyId": 4
            },
            {
                "locationId": 4,
                "title": "Derslik 4",
                "facultyId": 1
            },
            {
                "locationId": 5,
                "title": "Loc 5",
                "facultyId": 2
            },
            {
                "locationId": 6,
                "title": "Derslik 6",
                "facultyId": 2
            }, {
                "locationId": 7,
                "title": "Derslik 7",
                "facultyId": 4
            },
            {
                "locationId": 8,
                "title": "Loc 8",
                "facultyId": 3
            },
            {
                "locationId": 9,
                "title": "Derslik 9",
                "facultyId": 1
            }
        ]);
    }
}
