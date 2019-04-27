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
                "unitLessonId": 345,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 9,
                  "name": "ELEKTRİK DEVRE TEMELLERİ",
                  "lessonCode": "BSM 201",
                  "akts": 2,
                  "credit": 4,
                  "weeklyHour": 2,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 10,
                  "title": "1009"
                }
              },
              {
                "unitLessonId": 346,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 13,
                  "name": "BİÇİMSEL DİLLER VE SOYUT MAKİNELER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 13,
                  "name": "Ali",
                  "surname": "Gülbağ",
                  "email": "agulbag@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 347,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 13,
                  "name": "BİÇİMSEL DİLLER VE SOYUT MAKİNELER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 13,
                  "name": "Ali",
                  "surname": "Gülbağ",
                  "email": "agulbag@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 8,
                  "title": "1007"
                }
              },
              {
                "unitLessonId": 348,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 13,
                  "name": "BİÇİMSEL DİLLER VE SOYUT MAKİNELER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 13,
                  "name": "Ali",
                  "surname": "Gülbağ",
                  "email": "agulbag@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 8,
                  "title": "1007"
                }
              },
              {
                "unitLessonId": 349,
                "starTime": 14,
                "endTime": 15,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 13,
                  "name": "BİÇİMSEL DİLLER VE SOYUT MAKİNELER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 13,
                  "name": "Ali",
                  "surname": "Gülbağ",
                  "email": "agulbag@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 8,
                  "title": "1007"
                }
              },
              {
                "unitLessonId": 350,
                "starTime": 9,
                "endTime": 10,
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
                  "locationId": 1,
                  "title": "1000"
                }
              },
              {
                "unitLessonId": 351,
                "starTime": 10,
                "endTime": 11,
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
                  "locationId": 1,
                  "title": "1000"
                }
              },
              {
                "unitLessonId": 352,
                "starTime": 11,
                "endTime": 12,
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
                  "locationId": 1,
                  "title": "1000"
                }
              },
              {
                "unitLessonId": 353,
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
                  "locationId": 1,
                  "title": "1000"
                }
              },
              {
                "unitLessonId": 354,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
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
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 1,
                  "title": "1000"
                }
              },
              {
                "unitLessonId": 355,
                "starTime": 14,
                "endTime": 15,
                "groupType": 2,
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
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 1,
                  "title": "1000"
                }
              },
              {
                "unitLessonId": 356,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 2,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 357,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 2,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 358,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 2,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 17,
                  "title": "10016"
                }
              },
              {
                "unitLessonId": 359,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 2,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 17,
                  "title": "10016"
                }
              },
              {
                "unitLessonId": 360,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 2,
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
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 12,
                  "title": "10011"
                }
              },
              {
                "unitLessonId": 361,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 2,
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
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 12,
                  "title": "10011"
                }
              },
              {
                "unitLessonId": 362,
                "starTime": 9,
                "endTime": 10,
                "groupType": 3,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 19,
                  "name": "BF-TEKNİK SEÇMELİ 2",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 19,
                  "name": "Yüksel",
                  "surname": "Yurtay",
                  "email": "yyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 4
                },
                "location": {
                  "locationId": 16,
                  "title": "10015"
                }
              },
              {
                "unitLessonId": 363,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 13,
                  "name": "BİÇİMSEL DİLLER VE SOYUT MAKİNELER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 13,
                  "name": "Ali",
                  "surname": "Gülbağ",
                  "email": "agulbag@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 364,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 13,
                  "name": "BİÇİMSEL DİLLER VE SOYUT MAKİNELER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 13,
                  "name": "Ali",
                  "surname": "Gülbağ",
                  "email": "agulbag@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 365,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 11,
                  "name": "WEB PROGRAMLAMA",
                  "lessonCode": "BSM 205",
                  "akts": 6,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 6,
                  "name": "Ahmet",
                  "surname": "Zengin",
                  "email": "ahmet@zengin.edu.tr",
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
                "unitLessonId": 366,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 11,
                  "name": "WEB PROGRAMLAMA",
                  "lessonCode": "BSM 205",
                  "akts": 6,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 6,
                  "name": "Ahmet",
                  "surname": "Zengin",
                  "email": "ahmet@zengin.edu.tr",
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
                "unitLessonId": 367,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 21,
                  "name": "BF-TEKNİK SEÇMELİ 4",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 8,
                  "name": "Cüneyt",
                  "surname": "Bayılmış",
                  "email": "cbayilmis@sakarya.edu.tr",
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
                "unitLessonId": 368,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 21,
                  "name": "BF-TEKNİK SEÇMELİ 4",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 8,
                  "name": "Cüneyt",
                  "surname": "Bayılmış",
                  "email": "cbayilmis@sakarya.edu.tr",
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
                "unitLessonId": 369,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 21,
                  "name": "BF-TEKNİK SEÇMELİ 4",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 8,
                  "name": "Cüneyt",
                  "surname": "Bayılmış",
                  "email": "cbayilmis@sakarya.edu.tr",
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
                "unitLessonId": 370,
                "starTime": 9,
                "endTime": 10,
                "groupType": 3,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 13,
                  "name": "BİÇİMSEL DİLLER VE SOYUT MAKİNELER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 13,
                  "name": "Ali",
                  "surname": "Gülbağ",
                  "email": "agulbag@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 371,
                "starTime": 10,
                "endTime": 11,
                "groupType": 3,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 13,
                  "name": "BİÇİMSEL DİLLER VE SOYUT MAKİNELER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 13,
                  "name": "Ali",
                  "surname": "Gülbağ",
                  "email": "agulbag@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 372,
                "starTime": 11,
                "endTime": 12,
                "groupType": 3,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 13,
                  "name": "BİÇİMSEL DİLLER VE SOYUT MAKİNELER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 13,
                  "name": "Ali",
                  "surname": "Gülbağ",
                  "email": "agulbag@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 373,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 24,
                  "name": "BF-TEKNİK SEÇMELİ 7",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 7,
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 374,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 24,
                  "name": "BF-TEKNİK SEÇMELİ 7",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 7,
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 375,
                "starTime": 10,
                "endTime": 11,
                "groupType": 3,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 19,
                  "name": "BF-TEKNİK SEÇMELİ 2",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 19,
                  "name": "Yüksel",
                  "surname": "Yurtay",
                  "email": "yyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 4
                },
                "location": {
                  "locationId": 16,
                  "title": "10015"
                }
              },
              {
                "unitLessonId": 376,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 24,
                  "name": "BF-TEKNİK SEÇMELİ 7",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 7,
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 377,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 10,
                  "name": "MANTIK DEVRELERİ",
                  "lessonCode": "BSM 203",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                  "locationId": 3,
                  "title": "1002"
                }
              },
              {
                "unitLessonId": 378,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 10,
                  "name": "MANTIK DEVRELERİ",
                  "lessonCode": "BSM 203",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                  "locationId": 3,
                  "title": "1002"
                }
              },
              {
                "unitLessonId": 379,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 19,
                  "name": "BF-TEKNİK SEÇMELİ 2",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 19,
                  "name": "Yüksel",
                  "surname": "Yurtay",
                  "email": "yyurtay@sakarya.edu.tr",
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
                "unitLessonId": 380,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 19,
                  "name": "BF-TEKNİK SEÇMELİ 2",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 19,
                  "name": "Yüksel",
                  "surname": "Yurtay",
                  "email": "yyurtay@sakarya.edu.tr",
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
                "unitLessonId": 381,
                "starTime": 14,
                "endTime": 15,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 19,
                  "name": "BF-TEKNİK SEÇMELİ 2",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 19,
                  "name": "Yüksel",
                  "surname": "Yurtay",
                  "email": "yyurtay@sakarya.edu.tr",
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
                "unitLessonId": 382,
                "starTime": 9,
                "endTime": 10,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 18,
                  "name": "BF-TEKNİK SEÇMELİ 1",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 18,
                  "name": "Can",
                  "surname": "Yüzkollar",
                  "email": "can@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 17,
                  "title": "10016"
                }
              },
              {
                "unitLessonId": 383,
                "starTime": 10,
                "endTime": 11,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 18,
                  "name": "BF-TEKNİK SEÇMELİ 1",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 18,
                  "name": "Can",
                  "surname": "Yüzkollar",
                  "email": "can@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 17,
                  "title": "10016"
                }
              },
              {
                "unitLessonId": 384,
                "starTime": 11,
                "endTime": 12,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 18,
                  "name": "BF-TEKNİK SEÇMELİ 1",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 18,
                  "name": "Can",
                  "surname": "Yüzkollar",
                  "email": "can@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 17,
                  "title": "10016"
                }
              },
              {
                "unitLessonId": 385,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 10,
                  "name": "MANTIK DEVRELERİ",
                  "lessonCode": "BSM 203",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                  "locationId": 3,
                  "title": "1002"
                }
              },
              {
                "unitLessonId": 386,
                "starTime": 11,
                "endTime": 12,
                "groupType": 3,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 17,
                  "name": "VERİ İLETİŞİMİ",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 17,
                  "name": "Serap",
                  "surname": "Kazan",
                  "email": "serapkazan@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 387,
                "starTime": 11,
                "endTime": 12,
                "groupType": 3,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 19,
                  "name": "BF-TEKNİK SEÇMELİ 2",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 19,
                  "name": "Yüksel",
                  "surname": "Yurtay",
                  "email": "yyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 4
                },
                "location": {
                  "locationId": 16,
                  "title": "10015"
                }
              },
              {
                "unitLessonId": 388,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 3,
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
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 389,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 15,
                  "name": "İŞARETLER VE SİSTEMLER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 15,
                  "name": "Murat",
                  "surname": "İskefiyeli",
                  "email": "miskef@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 5,
                  "title": "1004"
                }
              },
              {
                "unitLessonId": 390,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 15,
                  "name": "İŞARETLER VE SİSTEMLER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 15,
                  "name": "Murat",
                  "surname": "İskefiyeli",
                  "email": "miskef@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 5,
                  "title": "1004"
                }
              },
              {
                "unitLessonId": 391,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 15,
                  "name": "İŞARETLER VE SİSTEMLER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 15,
                  "name": "Murat",
                  "surname": "İskefiyeli",
                  "email": "miskef@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 392,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 15,
                  "name": "İŞARETLER VE SİSTEMLER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 15,
                  "name": "Murat",
                  "surname": "İskefiyeli",
                  "email": "miskef@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 393,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 15,
                  "name": "İŞARETLER VE SİSTEMLER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 15,
                  "name": "Murat",
                  "surname": "İskefiyeli",
                  "email": "miskef@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 394,
                "starTime": 12,
                "endTime": 13,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 15,
                  "name": "İŞARETLER VE SİSTEMLER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 15,
                  "name": "Murat",
                  "surname": "İskefiyeli",
                  "email": "miskef@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 11,
                  "title": "10010"
                }
              },
              {
                "unitLessonId": 395,
                "starTime": 13,
                "endTime": 14,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 15,
                  "name": "İŞARETLER VE SİSTEMLER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 15,
                  "name": "Murat",
                  "surname": "İskefiyeli",
                  "email": "miskef@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 11,
                  "title": "10010"
                }
              },
              {
                "unitLessonId": 396,
                "starTime": 14,
                "endTime": 15,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 15,
                  "name": "İŞARETLER VE SİSTEMLER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 15,
                  "name": "Murat",
                  "surname": "İskefiyeli",
                  "email": "miskef@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 11,
                  "title": "10010"
                }
              },
              {
                "unitLessonId": 397,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 24,
                  "name": "BF-TEKNİK SEÇMELİ 7",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 7,
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 5,
                  "title": "1004"
                }
              },
              {
                "unitLessonId": 398,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 24,
                  "name": "BF-TEKNİK SEÇMELİ 7",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 7,
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 5,
                  "title": "1004"
                }
              },
              {
                "unitLessonId": 399,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 24,
                  "name": "BF-TEKNİK SEÇMELİ 7",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 7,
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 5,
                  "title": "1004"
                }
              },
              {
                "unitLessonId": 400,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 3,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 401,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 3,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 402,
                "starTime": 9,
                "endTime": 10,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 24,
                  "name": "BF-TEKNİK SEÇMELİ 7",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 7,
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
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
                "unitLessonId": 403,
                "starTime": 10,
                "endTime": 11,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 24,
                  "name": "BF-TEKNİK SEÇMELİ 7",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 7,
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
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
                "unitLessonId": 404,
                "starTime": 11,
                "endTime": 12,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 24,
                  "name": "BF-TEKNİK SEÇMELİ 7",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 7,
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
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
                "unitLessonId": 405,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 23,
                  "name": "BF-TEKNİK SEÇMELİ 6",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 11,
                  "name": "Nilüfer",
                  "surname": "Yurtay",
                  "email": "nyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 14,
                  "title": "10013"
                }
              },
              {
                "unitLessonId": 406,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 15,
                  "name": "İŞARETLER VE SİSTEMLER",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 15,
                  "name": "Murat",
                  "surname": "İskefiyeli",
                  "email": "miskef@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 5,
                  "title": "1004"
                }
              },
              {
                "unitLessonId": 407,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 17,
                  "name": "VERİ İLETİŞİMİ",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 17,
                  "name": "Serap",
                  "surname": "Kazan",
                  "email": "serapkazan@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 11,
                  "title": "10010"
                }
              },
              {
                "unitLessonId": 408,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 17,
                  "name": "VERİ İLETİŞİMİ",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 17,
                  "name": "Serap",
                  "surname": "Kazan",
                  "email": "serapkazan@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 11,
                  "title": "10010"
                }
              },
              {
                "unitLessonId": 409,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 17,
                  "name": "VERİ İLETİŞİMİ",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 17,
                  "name": "Serap",
                  "surname": "Kazan",
                  "email": "serapkazan@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 11,
                  "title": "10010"
                }
              },
              {
                "unitLessonId": 410,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 12,
                  "name": "VERİ YAPILARI",
                  "lessonCode": "BSM 207",
                  "akts": 6,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                  "locationId": 9,
                  "title": "1008"
                }
              },
              {
                "unitLessonId": 411,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 12,
                  "name": "VERİ YAPILARI",
                  "lessonCode": "BSM 207",
                  "akts": 6,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                  "locationId": 9,
                  "title": "1008"
                }
              },
              {
                "unitLessonId": 412,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 12,
                  "name": "VERİ YAPILARI",
                  "lessonCode": "BSM 207",
                  "akts": 6,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                  "locationId": 9,
                  "title": "1008"
                }
              },
              {
                "unitLessonId": 413,
                "starTime": 12,
                "endTime": 13,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 21,
                  "name": "BF-TEKNİK SEÇMELİ 4",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 8,
                  "name": "Cüneyt",
                  "surname": "Bayılmış",
                  "email": "cbayilmis@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 7,
                  "title": "1006"
                }
              },
              {
                "unitLessonId": 414,
                "starTime": 13,
                "endTime": 14,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 21,
                  "name": "BF-TEKNİK SEÇMELİ 4",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 8,
                  "name": "Cüneyt",
                  "surname": "Bayılmış",
                  "email": "cbayilmis@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 7,
                  "title": "1006"
                }
              },
              {
                "unitLessonId": 415,
                "starTime": 14,
                "endTime": 15,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 21,
                  "name": "BF-TEKNİK SEÇMELİ 4",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 8,
                  "name": "Cüneyt",
                  "surname": "Bayılmış",
                  "email": "cbayilmis@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 7,
                  "title": "1006"
                }
              },
              {
                "unitLessonId": 416,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 8,
                  "name": "SAYISAL ANALİZ",
                  "lessonCode": "MAT 217",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 417,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 8,
                  "name": "SAYISAL ANALİZ",
                  "lessonCode": "MAT 217",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 418,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 3,
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
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 419,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 8,
                  "name": "SAYISAL ANALİZ",
                  "lessonCode": "MAT 217",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 420,
                "starTime": 10,
                "endTime": 11,
                "groupType": 3,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 23,
                  "name": "BF-TEKNİK SEÇMELİ 6",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 5,
                  "title": "1004"
                }
              },
              {
                "unitLessonId": 421,
                "starTime": 11,
                "endTime": 12,
                "groupType": 3,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 23,
                  "name": "BF-TEKNİK SEÇMELİ 6",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 5,
                  "title": "1004"
                }
              },
              {
                "unitLessonId": 422,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 8,
                  "name": "SAYISAL ANALİZ",
                  "lessonCode": "MAT 217",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 2,
                  "title": "1001"
                }
              },
              {
                "unitLessonId": 423,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 8,
                  "name": "SAYISAL ANALİZ",
                  "lessonCode": "MAT 217",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 2,
                  "title": "1001"
                }
              },
              {
                "unitLessonId": 424,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 8,
                  "name": "SAYISAL ANALİZ",
                  "lessonCode": "MAT 217",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 2,
                  "title": "1001"
                }
              },
              {
                "unitLessonId": 425,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 23,
                  "name": "BF-TEKNİK SEÇMELİ 6",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
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
                "unitLessonId": 426,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 23,
                  "name": "BF-TEKNİK SEÇMELİ 6",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
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
                "unitLessonId": 427,
                "starTime": 14,
                "endTime": 15,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 23,
                  "name": "BF-TEKNİK SEÇMELİ 6",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
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
                "unitLessonId": 428,
                "starTime": 9,
                "endTime": 10,
                "groupType": 3,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 23,
                  "name": "BF-TEKNİK SEÇMELİ 6",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 5,
                  "title": "1004"
                }
              },
              {
                "unitLessonId": 429,
                "starTime": 10,
                "endTime": 11,
                "groupType": 3,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 17,
                  "name": "VERİ İLETİŞİMİ",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 17,
                  "name": "Serap",
                  "surname": "Kazan",
                  "email": "serapkazan@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 430,
                "starTime": 9,
                "endTime": 10,
                "groupType": 3,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 17,
                  "name": "VERİ İLETİŞİMİ",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 17,
                  "name": "Serap",
                  "surname": "Kazan",
                  "email": "serapkazan@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 431,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 19,
                  "name": "BF-TEKNİK SEÇMELİ 2",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 19,
                  "name": "Yüksel",
                  "surname": "Yurtay",
                  "email": "yyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 4
                },
                "location": {
                  "locationId": 7,
                  "title": "1006"
                }
              },
              {
                "unitLessonId": 432,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 20,
                  "name": "BF-TEKNİK SEÇMELİ 3",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 20,
                  "name": "Nevzat",
                  "surname": "Taşbaşı",
                  "email": "ntasbasi@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 433,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 20,
                  "name": "BF-TEKNİK SEÇMELİ 3",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 20,
                  "name": "Nevzat",
                  "surname": "Taşbaşı",
                  "email": "ntasbasi@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 434,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 14,
                  "name": "VERİTABANI YÖNETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 3,
                  "title": "1002"
                }
              },
              {
                "unitLessonId": 435,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 14,
                  "name": "VERİTABANI YÖNETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 3,
                  "title": "1002"
                }
              },
              {
                "unitLessonId": 436,
                "starTime": 14,
                "endTime": 15,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 14,
                  "name": "VERİTABANI YÖNETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 3,
                  "title": "1002"
                }
              },
              {
                "unitLessonId": 437,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 7,
                  "name": "ATATÜRK İLKELERİ VE İNKILÂP TARİHİ",
                  "lessonCode": "ATA 203",
                  "akts": 4,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 12,
                  "title": "10011"
                }
              },
              {
                "unitLessonId": 438,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 7,
                  "name": "ATATÜRK İLKELERİ VE İNKILÂP TARİHİ",
                  "lessonCode": "ATA 203",
                  "akts": 4,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 12,
                  "title": "10011"
                }
              },
              {
                "unitLessonId": 439,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 7,
                  "name": "ATATÜRK İLKELERİ VE İNKILÂP TARİHİ",
                  "lessonCode": "ATA 203",
                  "akts": 4,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 440,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 7,
                  "name": "ATATÜRK İLKELERİ VE İNKILÂP TARİHİ",
                  "lessonCode": "ATA 203",
                  "akts": 4,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 10,
                  "name": "İbrahim",
                  "surname": "Özçelik",
                  "email": "ozcelik@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 441,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 1,
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
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
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
                "unitLessonId": 442,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 1,
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
                  "name": "Ahmet",
                  "surname": "Özmen",
                  "email": "ahmet@ozmen.edu.tr",
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
                "unitLessonId": 443,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 10,
                  "name": "MANTIK DEVRELERİ",
                  "lessonCode": "BSM 203",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                "unitLessonId": 444,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 10,
                  "name": "MANTIK DEVRELERİ",
                  "lessonCode": "BSM 203",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                "unitLessonId": 445,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 10,
                  "name": "MANTIK DEVRELERİ",
                  "lessonCode": "BSM 203",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                "unitLessonId": 446,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 2,
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
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 447,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 2,
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
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 448,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 2,
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
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 449,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 20,
                  "name": "BF-TEKNİK SEÇMELİ 3",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 20,
                  "name": "Nevzat",
                  "surname": "Taşbaşı",
                  "email": "ntasbasi@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 13,
                  "title": "10012"
                }
              },
              {
                "unitLessonId": 450,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 451,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 452,
                "starTime": 11,
                "endTime": 12,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 20,
                  "name": "BF-TEKNİK SEÇMELİ 3",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 20,
                  "name": "Nevzat",
                  "surname": "Taşbaşı",
                  "email": "ntasbasi@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 17,
                  "title": "10016"
                }
              },
              {
                "unitLessonId": 453,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 9,
                  "name": "ELEKTRİK DEVRE TEMELLERİ",
                  "lessonCode": "BSM 201",
                  "akts": 2,
                  "credit": 4,
                  "weeklyHour": 2,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 10,
                  "title": "1009"
                }
              },
              {
                "unitLessonId": 454,
                "starTime": 11,
                "endTime": 12,
                "groupType": 3,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 22,
                  "name": "BF-TEKNİK SEÇMELİ 5",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 455,
                "starTime": 12,
                "endTime": 13,
                "groupType": 3,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 22,
                  "name": "BF-TEKNİK SEÇMELİ 5",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 456,
                "starTime": 13,
                "endTime": 14,
                "groupType": 3,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 22,
                  "name": "BF-TEKNİK SEÇMELİ 5",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 18,
                  "title": "10017"
                }
              },
              {
                "unitLessonId": 457,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 14,
                  "name": "VERİTABANI YÖNETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 3,
                  "title": "1002"
                }
              },
              {
                "unitLessonId": 458,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 14,
                  "name": "VERİTABANI YÖNETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 3,
                  "title": "1002"
                }
              },
              {
                "unitLessonId": 459,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 14,
                  "name": "VERİTABANI YÖNETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 3,
                  "title": "1002"
                }
              },
              {
                "unitLessonId": 460,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 16,
                  "name": "İŞLETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 16,
                  "name": "Seçkin",
                  "surname": "Arı",
                  "email": "seckinari@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 8,
                  "title": "1007"
                }
              },
              {
                "unitLessonId": 461,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 3,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 462,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 16,
                  "name": "İŞLETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 16,
                  "name": "Seçkin",
                  "surname": "Arı",
                  "email": "seckinari@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 8,
                  "title": "1007"
                }
              },
              {
                "unitLessonId": 463,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 20,
                  "name": "BF-TEKNİK SEÇMELİ 3",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 20,
                  "name": "Nevzat",
                  "surname": "Taşbaşı",
                  "email": "ntasbasi@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 9,
                  "title": "1008"
                }
              },
              {
                "unitLessonId": 464,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 20,
                  "name": "BF-TEKNİK SEÇMELİ 3",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 20,
                  "name": "Nevzat",
                  "surname": "Taşbaşı",
                  "email": "ntasbasi@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 9,
                  "title": "1008"
                }
              },
              {
                "unitLessonId": 465,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 20,
                  "name": "BF-TEKNİK SEÇMELİ 3",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 20,
                  "name": "Nevzat",
                  "surname": "Taşbaşı",
                  "email": "ntasbasi@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 9,
                  "title": "1008"
                }
              },
              {
                "unitLessonId": 466,
                "starTime": 12,
                "endTime": 13,
                "groupType": 3,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 14,
                  "name": "VERİTABANI YÖNETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 467,
                "starTime": 13,
                "endTime": 14,
                "groupType": 3,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 14,
                  "name": "VERİTABANI YÖNETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 468,
                "starTime": 14,
                "endTime": 15,
                "groupType": 3,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 14,
                  "name": "VERİTABANI YÖNETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 469,
                "starTime": 9,
                "endTime": 10,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 20,
                  "name": "BF-TEKNİK SEÇMELİ 3",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 20,
                  "name": "Nevzat",
                  "surname": "Taşbaşı",
                  "email": "ntasbasi@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 17,
                  "title": "10016"
                }
              },
              {
                "unitLessonId": 470,
                "starTime": 10,
                "endTime": 11,
                "groupType": 3,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 20,
                  "name": "BF-TEKNİK SEÇMELİ 3",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 20,
                  "name": "Nevzat",
                  "surname": "Taşbaşı",
                  "email": "ntasbasi@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 17,
                  "title": "10016"
                }
              },
              {
                "unitLessonId": 471,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 16,
                  "name": "İŞLETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 16,
                  "name": "Seçkin",
                  "surname": "Arı",
                  "email": "seckinari@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 8,
                  "title": "1007"
                }
              },
              {
                "unitLessonId": 472,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 3,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 473,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 9,
                  "name": "ELEKTRİK DEVRE TEMELLERİ",
                  "lessonCode": "BSM 201",
                  "akts": 2,
                  "credit": 4,
                  "weeklyHour": 2,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 1,
                  "title": "1000"
                }
              },
              {
                "unitLessonId": 474,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 9,
                  "name": "ELEKTRİK DEVRE TEMELLERİ",
                  "lessonCode": "BSM 201",
                  "akts": 2,
                  "credit": 4,
                  "weeklyHour": 2,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 14,
                  "name": "Fatih",
                  "surname": "Adak",
                  "email": "fatihadak@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 1,
                  "title": "1000"
                }
              },
              {
                "unitLessonId": 475,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 21,
                  "name": "BF-TEKNİK SEÇMELİ 4",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 8,
                  "name": "Cüneyt",
                  "surname": "Bayılmış",
                  "email": "cbayilmis@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 14,
                  "title": "10013"
                }
              },
              {
                "unitLessonId": 476,
                "starTime": 14,
                "endTime": 15,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 21,
                  "name": "BF-TEKNİK SEÇMELİ 4",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 8,
                  "name": "Cüneyt",
                  "surname": "Bayılmış",
                  "email": "cbayilmis@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 14,
                  "title": "10013"
                }
              },
              {
                "unitLessonId": 477,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 22,
                  "name": "BF-TEKNİK SEÇMELİ 5",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 478,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 22,
                  "name": "BF-TEKNİK SEÇMELİ 5",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 479,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 22,
                  "name": "BF-TEKNİK SEÇMELİ 5",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 480,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 16,
                  "name": "İŞLETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 16,
                  "name": "Seçkin",
                  "surname": "Arı",
                  "email": "seckinari@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 16,
                  "title": "10015"
                }
              },
              {
                "unitLessonId": 481,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 16,
                  "name": "İŞLETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 16,
                  "name": "Seçkin",
                  "surname": "Arı",
                  "email": "seckinari@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 16,
                  "title": "10015"
                }
              },
              {
                "unitLessonId": 482,
                "starTime": 14,
                "endTime": 15,
                "groupType": 2,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 16,
                  "name": "İŞLETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 16,
                  "name": "Seçkin",
                  "surname": "Arı",
                  "email": "seckinari@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 16,
                  "title": "10015"
                }
              },
              {
                "unitLessonId": 483,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 2,
                "lesson": {
                  "lessonId": 21,
                  "name": "BF-TEKNİK SEÇMELİ 4",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 8,
                  "name": "Cüneyt",
                  "surname": "Bayılmış",
                  "email": "cbayilmis@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 14,
                  "title": "10013"
                }
              },
              {
                "unitLessonId": 484,
                "starTime": 9,
                "endTime": 10,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 18,
                  "name": "BF-TEKNİK SEÇMELİ 1",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 18,
                  "name": "Can",
                  "surname": "Yüzkollar",
                  "email": "can@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 10,
                  "title": "1009"
                }
              },
              {
                "unitLessonId": 485,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 18,
                  "name": "BF-TEKNİK SEÇMELİ 1",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 18,
                  "name": "Can",
                  "surname": "Yüzkollar",
                  "email": "can@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 10,
                  "title": "1009"
                }
              },
              {
                "unitLessonId": 486,
                "starTime": 12,
                "endTime": 13,
                "groupType": 2,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 18,
                  "name": "BF-TEKNİK SEÇMELİ 1",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 18,
                  "name": "Can",
                  "surname": "Yüzkollar",
                  "email": "can@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 8,
                  "title": "1007"
                }
              },
              {
                "unitLessonId": 487,
                "starTime": 13,
                "endTime": 14,
                "groupType": 2,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 18,
                  "name": "BF-TEKNİK SEÇMELİ 1",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 18,
                  "name": "Can",
                  "surname": "Yüzkollar",
                  "email": "can@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 8,
                  "title": "1007"
                }
              },
              {
                "unitLessonId": 488,
                "starTime": 14,
                "endTime": 15,
                "groupType": 2,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 18,
                  "name": "BF-TEKNİK SEÇMELİ 1",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 18,
                  "name": "Can",
                  "surname": "Yüzkollar",
                  "email": "can@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 8,
                  "title": "1007"
                }
              },
              {
                "unitLessonId": 489,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 11,
                  "name": "WEB PROGRAMLAMA",
                  "lessonCode": "BSM 205",
                  "akts": 6,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 6,
                  "name": "Ahmet",
                  "surname": "Zengin",
                  "email": "ahmet@zengin.edu.tr",
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
                "unitLessonId": 490,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 11,
                  "name": "WEB PROGRAMLAMA",
                  "lessonCode": "BSM 205",
                  "akts": 6,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 6,
                  "name": "Ahmet",
                  "surname": "Zengin",
                  "email": "ahmet@zengin.edu.tr",
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
                "unitLessonId": 491,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 19,
                  "name": "BF-TEKNİK SEÇMELİ 2",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 19,
                  "name": "Yüksel",
                  "surname": "Yurtay",
                  "email": "yyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 4
                },
                "location": {
                  "locationId": 7,
                  "title": "1006"
                }
              },
              {
                "unitLessonId": 492,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 19,
                  "name": "BF-TEKNİK SEÇMELİ 2",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 19,
                  "name": "Yüksel",
                  "surname": "Yurtay",
                  "email": "yyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 4
                },
                "location": {
                  "locationId": 7,
                  "title": "1006"
                }
              },
              {
                "unitLessonId": 493,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 18,
                  "name": "BF-TEKNİK SEÇMELİ 1",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 18,
                  "name": "Can",
                  "surname": "Yüzkollar",
                  "email": "can@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 10,
                  "title": "1009"
                }
              },
              {
                "unitLessonId": 494,
                "starTime": 10,
                "endTime": 11,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 23,
                  "name": "BF-TEKNİK SEÇMELİ 6",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 11,
                  "name": "Nilüfer",
                  "surname": "Yurtay",
                  "email": "nyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 14,
                  "title": "10013"
                }
              },
              {
                "unitLessonId": 495,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 2,
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
                  "locationId": 12,
                  "title": "10011"
                }
              },
              {
                "unitLessonId": 496,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 2,
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
                  "locationId": 12,
                  "title": "10011"
                }
              },
              {
                "unitLessonId": 497,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 11,
                  "name": "WEB PROGRAMLAMA",
                  "lessonCode": "BSM 205",
                  "akts": 6,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 6,
                  "name": "Ahmet",
                  "surname": "Zengin",
                  "email": "ahmet@zengin.edu.tr",
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
                "unitLessonId": 498,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 11,
                  "name": "WEB PROGRAMLAMA",
                  "lessonCode": "BSM 205",
                  "akts": 6,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 6,
                  "name": "Ahmet",
                  "surname": "Zengin",
                  "email": "ahmet@zengin.edu.tr",
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
                "unitLessonId": 499,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 22,
                  "name": "BF-TEKNİK SEÇMELİ 5",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 14,
                  "title": "10013"
                }
              },
              {
                "unitLessonId": 500,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 22,
                  "name": "BF-TEKNİK SEÇMELİ 5",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 14,
                  "title": "10013"
                }
              },
              {
                "unitLessonId": 501,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 22,
                  "name": "BF-TEKNİK SEÇMELİ 5",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 1
                },
                "location": {
                  "locationId": 14,
                  "title": "10013"
                }
              },
              {
                "unitLessonId": 502,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 7,
                  "name": "ATATÜRK İLKELERİ VE İNKILÂP TARİHİ",
                  "lessonCode": "ATA 203",
                  "akts": 4,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 11,
                  "name": "Nilüfer",
                  "surname": "Yurtay",
                  "email": "nyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 503,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 4,
                "lesson": {
                  "lessonId": 7,
                  "name": "ATATÜRK İLKELERİ VE İNKILÂP TARİHİ",
                  "lessonCode": "ATA 203",
                  "akts": 4,
                  "credit": 4,
                  "weeklyHour": 4,
                  "semesterType": 3,
                  "lessonType": 1
                },
                "user": {
                  "userId": 11,
                  "name": "Nilüfer",
                  "surname": "Yurtay",
                  "email": "nyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 504,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 505,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 2,
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
                  "locationId": 12,
                  "title": "10011"
                }
              },
              {
                "unitLessonId": 506,
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
                  "userId": 5,
                  "name": "Nejat",
                  "surname": "Yumuşak",
                  "email": "nejat@sakarya.edu.tr",
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
                "unitLessonId": 507,
                "starTime": 12,
                "endTime": 13,
                "groupType": 3,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 16,
                  "name": "İŞLETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 16,
                  "name": "Seçkin",
                  "surname": "Arı",
                  "email": "seckinari@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 508,
                "starTime": 13,
                "endTime": 14,
                "groupType": 3,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 16,
                  "name": "İŞLETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 16,
                  "name": "Seçkin",
                  "surname": "Arı",
                  "email": "seckinari@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 509,
                "starTime": 9,
                "endTime": 10,
                "groupType": 2,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 12,
                  "name": "VERİ YAPILARI",
                  "lessonCode": "BSM 207",
                  "akts": 6,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                "unitLessonId": 510,
                "starTime": 10,
                "endTime": 11,
                "groupType": 2,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 12,
                  "name": "VERİ YAPILARI",
                  "lessonCode": "BSM 207",
                  "akts": 6,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                "unitLessonId": 511,
                "starTime": 11,
                "endTime": 12,
                "groupType": 2,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 12,
                  "name": "VERİ YAPILARI",
                  "lessonCode": "BSM 207",
                  "akts": 6,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 3,
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
                "unitLessonId": 512,
                "starTime": 12,
                "endTime": 13,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 17,
                  "name": "VERİ İLETİŞİMİ",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 17,
                  "name": "Serap",
                  "surname": "Kazan",
                  "email": "serapkazan@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 513,
                "starTime": 13,
                "endTime": 14,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 17,
                  "name": "VERİ İLETİŞİMİ",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 17,
                  "name": "Serap",
                  "surname": "Kazan",
                  "email": "serapkazan@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 514,
                "starTime": 14,
                "endTime": 15,
                "groupType": 1,
                "dayOfTheWeekType": 1,
                "lesson": {
                  "lessonId": 17,
                  "name": "VERİ İLETİŞİMİ",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 17,
                  "name": "Serap",
                  "surname": "Kazan",
                  "email": "serapkazan@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 4,
                  "title": "1003"
                }
              },
              {
                "unitLessonId": 515,
                "starTime": 11,
                "endTime": 12,
                "groupType": 3,
                "dayOfTheWeekType": 5,
                "lesson": {
                  "lessonId": 16,
                  "name": "İŞLETİM SİSTEMLERİ",
                  "lessonCode": "BSM 301",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 5,
                  "lessonType": 1
                },
                "user": {
                  "userId": 16,
                  "name": "Seçkin",
                  "surname": "Arı",
                  "email": "seckinari@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 5
                },
                "location": {
                  "locationId": 15,
                  "title": "10014"
                }
              },
              {
                "unitLessonId": 516,
                "starTime": 11,
                "endTime": 12,
                "groupType": 1,
                "dayOfTheWeekType": 3,
                "lesson": {
                  "lessonId": 23,
                  "name": "BF-TEKNİK SEÇMELİ 6",
                  "lessonCode": "BSM 305",
                  "akts": 5,
                  "credit": 3,
                  "weeklyHour": 3,
                  "semesterType": 7,
                  "lessonType": 1
                },
                "user": {
                  "userId": 11,
                  "name": "Nilüfer",
                  "surname": "Yurtay",
                  "email": "nyurtay@sakarya.edu.tr",
                  "roles": 1,
                  "status": 1,
                  "title": 2
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
