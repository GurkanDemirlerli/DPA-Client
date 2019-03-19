import { MockServiceBase } from './mock.service.base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LessonModel, AddLessonModel, UpdateLessonModel } from '../models/lesson.model';

@Injectable()
export class LessonMockService extends MockServiceBase<LessonModel, AddLessonModel, UpdateLessonModel> {


    constructor() {
        super("lessonId", [
            {
                "lessonId": 1,
                "name": "Veri Yapıları",
                "lessonCode": "BSM-12",
                "group": "A",
                "akts": 8,
                "weeklyHour": 5,
                "lessonType": 1,
                "educationType": 2,
                "departmanId": 1
            },
            {
                "lessonId": 2,
                "name": "Matematik",
                "lessonCode": "BSM-13",
                "group": "A",
                "akts": 8,
                "weeklyHour": 5,
                "lessonType": 1,
                "educationType": 1,
                "departmanId": 1
            }, {
                "lessonId": 3,
                "name": "Fizik",
                "lessonCode": "BSM-14",
                "group": "A",
                "akts": 8,
                "weeklyHour": 5,
                "lessonType": 1,
                "educationType": 1,
                "departmanId": 1
            }, {
                "lessonId": 4,
                "name": "Mobil Uygulamalar",
                "lessonCode": "BSM-15",
                "group": "A",
                "akts": 8,
                "weeklyHour": 5,
                "lessonType": 1,
                "educationType": 1,
                "departmanId": 1
            }, {
                "lessonId": 5,
                "name": "Sayısal Analiz",
                "lessonCode": "BSM-16",
                "group": "A",
                "akts": 8,
                "weeklyHour": 5,
                "lessonType": 1,
                "educationType": 1,
                "departmanId": 1
            }, {
                "lessonId": 6,
                "name": "Optimizasyon",
                "lessonCode": "BSM-17",
                "group": "A",
                "akts": 8,
                "weeklyHour": 5,
                "lessonType": 1,
                "educationType": 1,
                "departmanId": 1
            }, {
                "lessonId": 7,
                "name": "Programlamaya Giriş",
                "lessonCode": "BSM-18",
                "group": "A",
                "akts": 8,
                "weeklyHour": 5,
                "lessonType": 1,
                "educationType": 1,
                "departmanId": 1
            },
            {
                "lessonId": 8,
                "name": "Veri Yapıları",
                "lessonCode": "BSM-12",
                "group": "B",
                "akts": 8,
                "weeklyHour": 5,
                "lessonType": 1,
                "educationType": 1,
                "departmanId": 1
            },
        ]);
    }


    getLessonsForDepartment(departmanId): Observable<LessonModel[]> {
        let data: LessonModel[] = [...this.data] as LessonModel[];
        let model: LessonModel[] = data.filter(x => x.departmanId == departmanId);
        return of(model);
    }
}
