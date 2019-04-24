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
                "unitLessonId": 1,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                    "lessonId": 2,
                    "name": "FİZİK I",
                    "lessonCode": "FIZ 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 5,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 2,
                    "name": "Celal",
                    "surname": "Çeken",
                    "email": "celalceken@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 1,
                    "title": "1000"
                }
            },
            {
                "unitLessonId": 2,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 1,
                "lesson": {
                    "lessonId": 1,
                    "name": "TÜRK DİLİ",
                    "lessonCode": "TUR 101",
                    "akts": 4,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 8,
                    "name": "Ahmet",
                    "surname": "Arslan",
                    "email": "ahmetarslan@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 2
                },
                "location": {
                    "locationId": 6,
                    "title": "1005"
                }
            },
            {
                "unitLessonId": 3,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 1,
                "lesson": {
                    "lessonId": 1,
                    "name": "TÜRK DİLİ",
                    "lessonCode": "TUR 101",
                    "akts": 4,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 8,
                    "name": "Ahmet",
                    "surname": "Arslan",
                    "email": "ahmetarslan@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 2
                },
                "location": {
                    "locationId": 6,
                    "title": "1005"
                }
            },
            {
                "unitLessonId": 4,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                    "lessonId": 1,
                    "name": "TÜRK DİLİ",
                    "lessonCode": "TUR 101",
                    "akts": 4,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 8,
                    "name": "Ahmet",
                    "surname": "Arslan",
                    "email": "ahmetarslan@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 2
                },
                "location": {
                    "locationId": 2,
                    "title": "1001"
                }
            },
            {
                "unitLessonId": 5,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                    "lessonId": 1,
                    "name": "TÜRK DİLİ",
                    "lessonCode": "TUR 101",
                    "akts": 4,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 8,
                    "name": "Ahmet",
                    "surname": "Arslan",
                    "email": "ahmetarslan@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 2
                },
                "location": {
                    "locationId": 2,
                    "title": "1001"
                }
            },
            {
                "unitLessonId": 6,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                    "lessonId": 2,
                    "name": "FİZİK I",
                    "lessonCode": "FIZ 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 5,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 2,
                    "name": "Celal",
                    "surname": "Çeken",
                    "email": "celalceken@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 9,
                    "title": "1008"
                }
            },
            {
                "unitLessonId": 7,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                    "lessonId": 2,
                    "name": "FİZİK I",
                    "lessonCode": "FIZ 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 5,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 2,
                    "name": "Celal",
                    "surname": "Çeken",
                    "email": "celalceken@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 9,
                    "title": "1008"
                }
            },
            {
                "unitLessonId": 8,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                    "lessonId": 2,
                    "name": "FİZİK I",
                    "lessonCode": "FIZ 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 5,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 2,
                    "name": "Celal",
                    "surname": "Çeken",
                    "email": "celalceken@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 9,
                    "title": "1008"
                }
            },
            {
                "unitLessonId": 9,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                    "lessonId": 3,
                    "name": "MATEMATİK I",
                    "lessonCode": "MAT 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 3,
                    "name": "Cemil",
                    "surname": "Öz",
                    "email": "coz@sakarya.edu.tr",
                    "roles": 2,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 10,
                    "title": "1009"
                }
            },
            {
                "unitLessonId": 10,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                    "lessonId": 3,
                    "name": "MATEMATİK I",
                    "lessonCode": "MAT 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 3,
                    "name": "Cemil",
                    "surname": "Öz",
                    "email": "coz@sakarya.edu.tr",
                    "roles": 2,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 10,
                    "title": "1009"
                }
            },
            {
                "unitLessonId": 11,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                    "lessonId": 1,
                    "name": "TÜRK DİLİ",
                    "lessonCode": "TUR 101",
                    "akts": 4,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 8,
                    "name": "Ahmet",
                    "surname": "Arslan",
                    "email": "ahmetarslan@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 2
                },
                "location": {
                    "locationId": 11,
                    "title": "10010"
                }
            },
            {
                "unitLessonId": 12,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                    "lessonId": 1,
                    "name": "TÜRK DİLİ",
                    "lessonCode": "TUR 101",
                    "akts": 4,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 8,
                    "name": "Ahmet",
                    "surname": "Arslan",
                    "email": "ahmetarslan@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 2
                },
                "location": {
                    "locationId": 11,
                    "title": "10010"
                }
            },
            {
                "unitLessonId": 13,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                    "lessonId": 2,
                    "name": "FİZİK I",
                    "lessonCode": "FIZ 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 5,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 2,
                    "name": "Celal",
                    "surname": "Çeken",
                    "email": "celalceken@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 16,
                    "title": "10015"
                }
            },
            {
                "unitLessonId": 14,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                    "lessonId": 2,
                    "name": "FİZİK I",
                    "lessonCode": "FIZ 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 5,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 2,
                    "name": "Celal",
                    "surname": "Çeken",
                    "email": "celalceken@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 16,
                    "title": "10015"
                }
            },
            {
                "unitLessonId": 15,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                    "lessonId": 6,
                    "name": "PROGRAMLAMAYA GİRİŞ",
                    "lessonCode": "BSM 103",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 4,
                    "name": "Ümit",
                    "surname": "Kocabıçak",
                    "email": "umit@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 15,
                    "title": "10014"
                }
            },
            {
                "unitLessonId": 16,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                    "lessonId": 6,
                    "name": "PROGRAMLAMAYA GİRİŞ",
                    "lessonCode": "BSM 103",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 4,
                    "name": "Ümit",
                    "surname": "Kocabıçak",
                    "email": "umit@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 15,
                    "title": "10014"
                }
            },
            {
                "unitLessonId": 17,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                    "lessonId": 4,
                    "name": "LİNEER CEBİR",
                    "lessonCode": "MAT 113",
                    "akts": 4,
                    "credit": 2,
                    "weeklyHour": 2,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 14,
                    "name": "Meltem",
                    "surname": "Aydın",
                    "email": "meltemayy@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 4
                },
                "location": {
                    "locationId": 10,
                    "title": "1009"
                }
            },
            {
                "unitLessonId": 18,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                    "lessonId": 4,
                    "name": "LİNEER CEBİR",
                    "lessonCode": "MAT 113",
                    "akts": 4,
                    "credit": 2,
                    "weeklyHour": 2,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 14,
                    "name": "Meltem",
                    "surname": "Aydın",
                    "email": "meltemayy@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 4
                },
                "location": {
                    "locationId": 10,
                    "title": "1009"
                }
            },
            {
                "unitLessonId": 19,
                "starTime": 14,
                "endTime": 15,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                    "lessonId": 3,
                    "name": "MATEMATİK I",
                    "lessonCode": "MAT 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 3,
                    "name": "Cemil",
                    "surname": "Öz",
                    "email": "coz@sakarya.edu.tr",
                    "roles": 2,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 1,
                    "title": "1000"
                }
            },
            {
                "unitLessonId": 20,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                    "lessonId": 3,
                    "name": "MATEMATİK I",
                    "lessonCode": "MAT 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 3,
                    "name": "Cemil",
                    "surname": "Öz",
                    "email": "coz@sakarya.edu.tr",
                    "roles": 2,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 1,
                    "title": "1000"
                }
            },
            {
                "unitLessonId": 21,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                    "lessonId": 6,
                    "name": "PROGRAMLAMAYA GİRİŞ",
                    "lessonCode": "BSM 103",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 4,
                    "name": "Ümit",
                    "surname": "Kocabıçak",
                    "email": "umit@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 8,
                    "title": "1007"
                }
            },
            {
                "unitLessonId": 22,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                    "lessonId": 6,
                    "name": "PROGRAMLAMAYA GİRİŞ",
                    "lessonCode": "BSM 103",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 4,
                    "name": "Ümit",
                    "surname": "Kocabıçak",
                    "email": "umit@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 8,
                    "title": "1007"
                }
            },
            {
                "unitLessonId": 23,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                    "lessonId": 5,
                    "name": "BİLGİSAYAR MÜHENDİSLİĞİNE GİRİŞ",
                    "lessonCode": "BSM 101",
                    "akts": 4,
                    "credit": 2,
                    "weeklyHour": 2,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 7,
                    "name": "Cüneyt",
                    "surname": "Bayılmış",
                    "email": "cbayilmis@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 3
                },
                "location": {
                    "locationId": 4,
                    "title": "1003"
                }
            },
            {
                "unitLessonId": 24,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                    "lessonId": 5,
                    "name": "BİLGİSAYAR MÜHENDİSLİĞİNE GİRİŞ",
                    "lessonCode": "BSM 101",
                    "akts": 4,
                    "credit": 2,
                    "weeklyHour": 2,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 7,
                    "name": "Cüneyt",
                    "surname": "Bayılmış",
                    "email": "cbayilmis@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 3
                },
                "location": {
                    "locationId": 4,
                    "title": "1003"
                }
            },
            {
                "unitLessonId": 25,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                    "lessonId": 6,
                    "name": "PROGRAMLAMAYA GİRİŞ",
                    "lessonCode": "BSM 103",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 4,
                    "name": "Ümit",
                    "surname": "Kocabıçak",
                    "email": "umit@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 7,
                    "title": "1006"
                }
            },
            {
                "unitLessonId": 26,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                    "lessonId": 6,
                    "name": "PROGRAMLAMAYA GİRİŞ",
                    "lessonCode": "BSM 103",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 4,
                    "name": "Ümit",
                    "surname": "Kocabıçak",
                    "email": "umit@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 7,
                    "title": "1006"
                }
            },
            {
                "unitLessonId": 27,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                    "lessonId": 2,
                    "name": "FİZİK I",
                    "lessonCode": "FIZ 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 5,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 2,
                    "name": "Celal",
                    "surname": "Çeken",
                    "email": "celalceken@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 1,
                    "title": "1000"
                }
            },
            {
                "unitLessonId": 28,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                    "lessonId": 2,
                    "name": "FİZİK I",
                    "lessonCode": "FIZ 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 5,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 2,
                    "name": "Celal",
                    "surname": "Çeken",
                    "email": "celalceken@sakarya.edu.tr",
                    "roles": 1,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 1,
                    "title": "1000"
                }
            },
            {
                "unitLessonId": 29,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                    "lessonId": 3,
                    "name": "MATEMATİK I",
                    "lessonCode": "MAT 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 3,
                    "name": "Cemil",
                    "surname": "Öz",
                    "email": "coz@sakarya.edu.tr",
                    "roles": 2,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 14,
                    "title": "10013"
                }
            },
            {
                "unitLessonId": 30,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                    "lessonId": 3,
                    "name": "MATEMATİK I",
                    "lessonCode": "MAT 111",
                    "akts": 6,
                    "credit": 4,
                    "weeklyHour": 4,
                    "semesterType": 1,
                    "lessonType": 1
                },
                "user": {
                    "userId": 3,
                    "name": "Cemil",
                    "surname": "Öz",
                    "email": "coz@sakarya.edu.tr",
                    "roles": 2,
                    "status": 1,
                    "title": 1
                },
                "location": {
                    "locationId": 14,
                    "title": "10013"
                }
            }
        ];
        this.lessons = [...gun0];
    }
}
