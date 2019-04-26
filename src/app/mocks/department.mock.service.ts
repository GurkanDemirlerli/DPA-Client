import { MockServiceBase } from './mock.service.base';
import { Injectable } from '@angular/core';
import { DepartmentModel, AddDepartmentModel, UpdateDepartmentModel } from '../models/department.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class DepartmentMockService extends MockServiceBase<DepartmentModel, AddDepartmentModel, UpdateDepartmentModel> {


    constructor() {
        super("departmentId", [
            {
                "departmentId": 1,
                "title": "Bilgisayar Mühendisliği",
                "departmentCode": "CS-1",
                "facultyId": 4
            },
            {
                "departmentId": 2,
                "title": "Bilişim Sistemleri Mühendisliği",
                "departmentCode": "CS-2",
                "facultyId": 4
            },
            {
                "departmentId": 3,
                "title": "Yazılım Mühendisliği",
                "departmentCode": "CS-3",
                "facultyId": 4
            }
        ]);
    }


    getDepartmentsForFaculty(facultyId): Observable<DepartmentModel[]> {
        let data: DepartmentModel[] = [...this.data] as DepartmentModel[];
        let model: DepartmentModel[] = data.filter(x => x.facultyId == facultyId);
        return of(model);
    }


}
