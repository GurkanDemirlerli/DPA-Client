import { MockServiceBase } from './mock.service.base';
import { Injectable } from '@angular/core';
import { DepartmanModel, AddDepartmanModel, UpdateDepartmanModel } from '../models/departman.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class DepartmentMockService extends MockServiceBase<DepartmanModel, AddDepartmanModel, UpdateDepartmanModel> {


    constructor() {
        super("departmanId", [
            {
                "departmanId": 1,
                "title": "Bilgisayar Mühendisliği",
                "departmanCode": "CS-1",
                "facultyId": 4
            },
            {
                "departmanId": 2,
                "title": "Bilişim Sistemleri Mühendisliği",
                "departmanCode": "CS-2",
                "facultyId": 4
            },
            {
                "departmanId": 3,
                "title": "Yazılım Mühendisliği",
                "departmanCode": "CS-3",
                "facultyId": 4
            }
        ]);
    }


    getDepartmentsForFaculty(facultyId): Observable<DepartmanModel[]> {
        let data: DepartmanModel[] = [...this.data] as DepartmanModel[];
        let model: DepartmanModel[] = data.filter(x => x.facultyId == facultyId);
        return of(model);
    }


}
