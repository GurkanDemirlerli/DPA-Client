import { MockServiceBase } from './mock.service.base';
import { Injectable } from '@angular/core';
import { FacultyModel } from '../models';
import { Observable, of } from 'rxjs';
import { AddFacultyModel } from '../models/add-faculty.model';
import { UpdateFacultyModel } from '../models/update-faculty.model';

@Injectable()
export class FacultyMockService extends MockServiceBase<FacultyModel, AddFacultyModel, UpdateFacultyModel> {

    constructor() {
        super("facultyId", [
            {
                "facultyId": 1,
                "title": "İlahiyat Fakültesi",
                "facultyCode": "IL10"
            },
            {
                "facultyId": 2,
                "title": "Elektronik Fakültesi",
                "facultyCode": "IL11"
            },
            {
                "facultyId": 3,
                "title": "Güzel Sanatlar Fakültesi",
                "facultyCode": "IL12"
            },
            {
                "facultyId": 4,
                "title": "Bilgisayar ve Bilişim Bilimleri Fakültesi",
                "facultyCode": "BM310"
            },
            {
                "facultyId": 5,
                "title": "Deneme Fakültesi",
                "facultyCode": "DF232"
            }
        ]);
    }

}



// import { Injectable } from '@angular/core';
// import { FacultyModel } from '../models';
// import { Observable, of } from 'rxjs';
// import { AddFacultyModel } from '../models/add-faculty.model';
// import { UpdateFacultyModel } from '../models/update-faculty.model';

// @Injectable()
// export class FacultyMockService {
//     data: FacultyModel[] = [
//         {
//             "facultyId": 1,
//             "title": "İlahiyat Fakültesi",
//             "facultyCode": "IL10"
//         },
//         {
//             "facultyId": 2,
//             "title": "Elektronik Fakültesi",
//             "facultyCode": "IL11"
//         },
//         {
//             "facultyId": 3,
//             "title": "Güzel Sanatlar Fakültesi",
//             "facultyCode": "IL12"
//         },
//         {
//             "facultyId": 4,
//             "title": "Bilgisayar ve Bilişim Bilimleri Fakültesi",
//             "facultyCode": "BM310"
//         },
//         {
//             "facultyId": 5,
//             "title": "Deneme Fakültesi",
//             "facultyCode": "DF232"
//         }];


//     constructor() { }

//     getAll(): Observable<FacultyModel[]> {
//         return of<FacultyModel[]>(this.data);
//     }

//     get(id: number): Observable<FacultyModel> {
//         let model: FacultyModel = this.data.find(x => x.facultyId === id);
//         return of<FacultyModel>(model);
//     }

//     add(addModel: AddFacultyModel): Observable<void> {
//         let model: FacultyModel = {
//             facultyId: this.data.length + 1,
//             facultyCode: addModel.facultyCode,
//             title: addModel.title
//         }
//         let data = [...this.data];
//         data.push(model);
//         this.data = data;
//         return of(null);
//     }

//     update(updateModel: UpdateFacultyModel, id: number): Observable<void> {
//         let data = [...this.data];
//         let oldModel: FacultyModel = this.data.find(x => x.facultyId === id);
//         let model: FacultyModel = {
//             facultyId: id,
//             facultyCode: updateModel.facultyCode,
//             title: updateModel.title
//         }
//         let index = data.indexOf(oldModel);
//         data = data.filter((val, i) => i != index);
//         data.push(model);
//         this.data = data;
//         return of(null);
//     }

//     delete(id: number): Observable<void> {
//         let data = [...this.data];
//         let model: FacultyModel = this.data.find(x => x.facultyId === id);
//         let index = data.indexOf(model);
//         data = data.filter((val, i) => i != index);
//         this.data = data;
//         return of(null);
//     }



// }