import { MockServiceBase } from './mock.service.base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConstraintModel, AddConstraintModel, UpdateConstraintModel } from '../models/constraint.model';

@Injectable()
export class ConstraintMockService extends MockServiceBase<ConstraintModel, AddConstraintModel, UpdateConstraintModel> {


    constructor() {
        super("constraintId", [
            {
                "constraintId": 1,
                "title": "Kısıt 1",
                "description": "Description",
                "isFreeDay": true,
                "isActive": true,
                "weeklyHour": 15,
                "educationType": 3,
                "userId": 1
            },
            {
                "constraintId": 2,
                "title": "Kısıt 2",
                "description": "Description",
                "isFreeDay": true,
                "isActive": true,
                "weeklyHour": 15,
                "educationType": 3,
                "userId": 1
            },
            {
                "constraintId": 3,
                "title": "Kısıt 3",
                "description": "Description",
                "isFreeDay": true,
                "isActive": true,
                "weeklyHour": 15,
                "educationType": 3,
                "userId": 2
            }
        ]);
    }
}
