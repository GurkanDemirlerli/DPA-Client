import { MockServiceBase } from './mock.service.base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ScheduleMockService {
    lessons = [];

    constructor() {
        this.fillLessons();
    }

    get(): Observable<any[]> {
        return of<any[]>(this.lessons);
    }

    fillLessons() {

        let gun0 = [
            {
                id: 9001,
                name: "Lesson9",
                group: "A",
                location: {
                    id: 1,
                    name: "Loc1"
                },
                instructors: [
                    {
                        id: 1,
                        name: "Ins1"
                    },
                ],
                day: 0,
                hour: 12,
                length: 3
            },
        ];

        let gun1 = [
            {
                id: 1001,
                name: "Veri Yapıları",
                group: "A",
                location: {
                    id: 1,
                    name: "Loc1"
                },
                instructors: [
                    {
                        id: 1,
                        name: "Ins1"
                    },
                ],
                day: 1,
                hour: 9,
                length: 2
            }, {
                id: 2001,
                name: "Biçimsel Diller ve Soyut Makineler",
                group: "A",
                location: {
                    id: 2,
                    name: "Loc2"
                },
                instructors: [
                    {
                        id: 10,
                        name: "Ins10"
                    }
                ],
                day: 1,
                hour: 9,
                length: 2
            }, {
                id: 1002,
                name: "Proje Yönetimi",
                group: "B",
                location: {
                    id: 3,
                    name: "Loc3"
                },
                instructors: [
                    {
                        id: 4,
                        name: "Ins4"
                    }
                ],
                day: 1,
                hour: 9,
                length: 2
            }, {
                id: 3001,
                name: "Lesson3",
                group: "A",
                location: {
                    id: 4,
                    name: "Loc4"
                },
                instructors: [
                    {
                        id: 5,
                        name: "Ins5"
                    }
                ],
                day: 1,
                hour: 9,
                length: 3
            }, {
                id: 4001,
                name: "Lesson4",
                group: "A",
                location: {
                    id: 5,
                    name: "Loc5"
                },
                instructors: [
                    {
                        id: 6,
                        name: "Ins6"
                    }
                ],
                day: 1,
                hour: 10,
                length: 2
            }, {
                id: 5001,
                name: "Lesson5",
                group: "A",
                location: {
                    id: 6,
                    name: "Loc6"
                },
                instructors: [
                    {
                        id: 7,
                        name: "Ins7"
                    }
                ],
                day: 1,
                hour: 10,
                length: 3
            }, {
                id: 5002,
                name: "Lesson5",
                group: "B",
                location: {
                    id: 7,
                    name: "Loc7"
                },
                instructors: [
                    {
                        id: 8,
                        name: "Ins8"
                    }
                ],
                day: 1,
                hour: 10,
                length: 3
            }, {
                id: 6001,
                name: "Lesson6",
                group: "A",
                location: {
                    id: 8,
                    name: "Loc8"
                },
                instructors: [
                    {
                        id: 1,
                        name: "Ins1"
                    }
                ],
                day: 1,
                hour: 11,
                length: 2
            }, {
                id: 6002,
                name: "Lesson6",
                group: "B",
                location: {
                    id: 2,
                    name: "Loc2"
                },
                instructors: [
                    {
                        id: 3,
                        name: "Ins3"
                    }
                ],
                day: 1,
                hour: 11,
                length: 2
            }, {
                id: 7002,
                name: "Lesson7",
                group: "B",
                location: {
                    id: 2,
                    name: "Loc2"
                },
                instructors: [
                    {
                        id: 10,
                        name: "Ins10"
                    }
                ],
                day: 1,
                hour: 17,
                length: 2
            }, {
                id: 8002,
                name: "Lesson8",
                group: "B",
                location: {
                    id: 2,
                    name: "Loc2"
                },
                instructors: [
                    {
                        id: 4,
                        name: "Ins4"
                    }
                ],
                day: 1,
                hour: 13,
                length: 2
            },
            {
                id: 8003,
                name: "Lesson8",
                group: "C",
                location: {
                    id: 15,
                    name: "Loc15"
                },
                instructors: [
                    {
                        id: 21,
                        name: "Ins11"
                    }
                ],
                day: 1,
                hour: 14,
                length: 2
            },
            {
                id: 1003,
                name: "Lesson1",
                group: "C",
                location: {
                    id: 2,
                    name: "Loc2"
                },
                instructors: [
                    {
                        id: 10,
                        name: "Ins10"
                    }
                ],
                day: 1,
                hour: 11,
                length: 3
            },
            {
                id: 2003,
                name: "Lesson2",
                group: "C",
                location: {
                    id: 2,
                    name: "Loc2"
                },
                instructors: [
                    {
                        id: 8,
                        name: "Ins8"
                    }
                ],
                day: 1,
                hour: 13,
                length: 3
            },
        ];
        this.lessons = [...gun0, ...gun1];
    }
}
