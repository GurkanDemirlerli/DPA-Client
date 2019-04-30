import { LocationService } from './../../services/location.service';
import { DepartmentInstructorService } from './../../services/department-instructor.service';
import { DepartmentLessonService } from './../../services/department-lesson.service';
import { UpdateUnitLessonModel } from './../../models/update-unit-lesson.model';
import { UnitLessonService } from './../../services/unit-lesson.service';
import { gunOptions, saatOptions, groupOptions, educationTypeOptions, semesterOptions } from './dropdown.data';
import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ScheduleUnit, ScheduleBlock } from 'src/app/models/schedule.model';
import { Schedule } from './schedule';
import { SyllabusService } from 'src/app/services/syllabus.service';
import { Titles, TitlesWord, EducationTypes, EducationTypesTableView, Roles } from 'src/app/enums';
import { LessonGroupEnum, LessonGroupReverseEnum } from 'src/app/enums/lesson-group.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { SyllabusModel } from 'src/app/models/syllabus.model';
import { switchMap } from 'rxjs/operators';
import { DepartmentService } from 'src/app/services/department.service';
import { SemesterEnum, SemesterReverseEnum } from 'src/app/enums/semester.enum';
import { DayOfTheWeekEnum, DayOfTheWeekReverseEnum } from 'src/app/enums/day-of-the-week.enum';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dpa-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class ScheduleComponent implements OnInit {

  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Escape") {
      if (this.goster != 6 && this.displayDialog == false) {
        this.tumunuSec();
      }
    }
  }

  public roles = Roles;

  public titles = Titles;
  public titlesWord = TitlesWord;
  public groupEnum = LessonGroupEnum;
  public groupEnumReverse = LessonGroupReverseEnum;
  public edTypeEnum = EducationTypes;
  public edTypeEnumReverse = EducationTypesTableView;
  public smEnum = SemesterEnum;
  public smEnumReverse = SemesterReverseEnum;
  public dayEnum = DayOfTheWeekEnum;
  public dayEnumReverse = DayOfTheWeekReverseEnum;

  lessons: ScheduleUnit[] = [];
  syllFirst: SyllabusModel;
  syllSecond: SyllabusModel;
  schedule: Schedule;
  gunler = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma"
  ];
  filtre = {
    name: "",
    ins: "",
    loc: "",
    grp: "",
    semester: "",
  }

  displayDialog: boolean = false;

  goster: number;

  selected: ScheduleBlock;

  dropdownOptions: any = {};

  duzenlemeModeli: any = {};

  dersStyle = {
    adi: {},
    loc: {},
    wrapper: {},
    ins: {}
  };

  uzat: boolean = false;

  loading = true;

  downPdf = false;
  constructor(
    private scheduleService: SyllabusService,
    private route: Router,
    private dataRoute: ActivatedRoute,
    private departmentService: DepartmentService,
    public authService: AuthService,
    private unitLessonService: UnitLessonService,
    private toastr: ToastrService,
    private departmentLessonService: DepartmentLessonService,
    private departmentInstructorService: DepartmentInstructorService,
    private locationService: LocationService
  ) { }



  ngOnInit() {
    if (this.dataRoute.snapshot.params['departmentId']) {

      let birinciler = [];
      let ikinciler = [];
      const dpId = this.dataRoute.snapshot.params['departmentId'];
      this.fillFilters(dpId);

      //TODO aşağıyı daha güzel hale getir
      this.scheduleService.getActiveFirstForDepartment(dpId).subscribe((syl1) => {
        birinciler = syl1.unitLessons;
        birinciler.map((br) => {
          br.educationType = syl1.educationType;
        })
        this.scheduleService.getActiveSecondForDepartment(dpId).subscribe((syl2) => {
          ikinciler = syl2.unitLessons;
          ikinciler.map((ik) => {
            ik.educationType = syl2.educationType;
          })
          this.lessons = [...birinciler, ...ikinciler];
          let schedule = new Schedule();
          this.schedule = schedule.make(this.lessons);
          this.loading = false;
          this.goster = 6;
          this.fillDropdownOptions();
        }, (err) => {
          this.lessons = [...birinciler, ...ikinciler];
          let schedule = new Schedule();
          this.schedule = schedule.make(this.lessons);
          this.loading = false;
          this.goster = 6;
          this.fillDropdownOptions();
        });
      }, (err) => {
        this.scheduleService.getActiveSecondForDepartment(dpId).subscribe((syl2) => {
          ikinciler = syl2.unitLessons;
          this.lessons = [...birinciler, ...ikinciler];
          let schedule = new Schedule();
          this.schedule = schedule.make(this.lessons);
          this.loading = false;
          this.goster = 6;
          this.fillDropdownOptions();
        }, (err) => {
          this.lessons = [...birinciler, ...ikinciler];
          let schedule = new Schedule();
          this.schedule = schedule.make(this.lessons);
          this.loading = false;
          this.goster = 6;
          this.fillDropdownOptions();
        });
      });
    } else {
      let dpId: number;
      this.departmentInstructorService.getDepartmentsForUserId(this.authService.userInfo.userId).subscribe((department) => {
        dpId = department[0].departmentId;
        this.fillFilters(dpId);
      });
      this.syllFirst = this.scheduleService.selectedFirst;
      this.syllSecond = this.scheduleService.selectedSecond;
      if (this.syllFirst != null && this.syllSecond != null) {
        this.syllFirst.unitLessons.map((un) => {
          un.educationType = this.syllFirst.educationType;
        });
        this.syllSecond.unitLessons.map((un) => {
          un.educationType = this.syllSecond.educationType;
        });
        this.lessons = [...this.syllFirst.unitLessons, ...this.syllSecond.unitLessons];
      } else if (this.syllFirst == null) {
        this.syllSecond.unitLessons.map((un) => {
          un.educationType = this.syllSecond.educationType;
        });
        this.lessons = [...this.syllSecond.unitLessons];
      } else if (this.syllSecond == null) {
        this.syllFirst.unitLessons.map((un) => {
          un.educationType = this.syllFirst.educationType;
        });
        this.lessons = [...this.syllFirst.unitLessons];
      } else {
        //TODO hata ver
      }
      let schedule = new Schedule();
      this.schedule = schedule.make(this.lessons);
      this.loading = false;
      this.loading = false;
      this.goster = 6;
      this.fillDropdownOptions();
    }


  }

  showDialog() {
    this.displayDialog = true;
  }

  fillFilters(dpId: number) {
    this.departmentLessonService.getLessonsByDepartmentId(dpId).subscribe((lss) => {
      this.dropdownOptions.lessonOptions = [];
      lss.map((ls) => {
        this.dropdownOptions.lessonOptions.push({
          label: ls.name,
          value: ls.name
        });
      });
    });

    this.departmentInstructorService.getUsersByDepartmentId(dpId).subscribe((uss) => {
      this.dropdownOptions.userOptions = [];
      uss.map((us) => {
        this.dropdownOptions.userOptions.push({
          label: us.name + ' ' + us.surname,
          value: us.name + ' ' + us.surname
        });
      });
    });

    this.departmentService.get(dpId).subscribe((dp) => {
      this.locationService.getForFaculty(dp.facultyId).subscribe((locs) => {
        this.dropdownOptions.locationOptions = [];
        locs.map((loc) => {
          this.dropdownOptions.locationOptions.push({
            label: loc.title,
            value: loc.title
          });
        });
      });
    });
  }

  selectLesson(event: Event, block: ScheduleBlock) {
    this.duzenlemeModeli = {};
    this.selected = block;
    this.displayDialog = true;
    event.preventDefault();

    let sclblrGunler = this.schedule.secilebilirGunler(this.selected.blockId);
    this.dropdownOptions.gunOptions = gunOptions.filter((opt) => {
      if (sclblrGunler.includes(opt.value)) {
        return true;
      } else {
        return false;
      }
    });
  }

  fillDropdownOptions() {
    this.dropdownOptions.gunOptions = gunOptions;
    this.dropdownOptions.saatOptions = [];
    this.dropdownOptions.derslikOptions = [];
    this.dropdownOptions.groupOptions = groupOptions;
    this.dropdownOptions.educationTypeOptions = educationTypeOptions;
    this.dropdownOptions.semesterOptions = semesterOptions;
  }

  getRandomColor() {
    let colors = [
      "00ffc7",
      "00faff",
      "00e0ff",
      "2ec0ff"
    ];
    return colors[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
  }

  saatleriFiltrele(e) {
    this.dropdownOptions.saatOptions = [];
    this.dropdownOptions.derslikOptions = [];
    let saatler = this.schedule.secilebilirSaatler(this.selected.blockId, this.duzenlemeModeli.gun);
    for (let i = 0; i < saatler.length; i++) {
      let saat = saatler[i];
      (this.dropdownOptions.saatOptions as any[]).push({
        label: saat + ":00" + "-" + (saat + this.selected.units.length) + ":00", value: saat
      })
    }
    this.duzenlemeModeli.saat = null;
    this.duzenlemeModeli.derslik = null;
  }

  toggleGenislik() {
    if (this.uzat) {
      document.getElementById('body').style.width = "100%";
      this.uzat = false;
    } else {
      document.getElementById('body').style.width = "2500px";
      this.uzat = true;
    }
  }

  derslikleriFiltrele(e) {
    this.dropdownOptions.derslikOptions = [];
    let derslikler = this.schedule.secilebilirDerslikler(this.selected.blockId, this.duzenlemeModeli.gun, this.duzenlemeModeli.saat);
    for (let i = 0; i < derslikler.length; i++) {
      let derslik = derslikler[i];
      (this.dropdownOptions.derslikOptions as any[]).push({
        label: derslik.title, value: derslik
      })
    }
    this.duzenlemeModeli.derslik = null;
  }

  saveSchedule() {
    let ders: ScheduleBlock = this.schedule.filtresizBL.find((opt) => {
      return opt.blockId === this.selected.blockId;
    });

    let others: ScheduleBlock[] = this.schedule.filtresizBL.filter((opt) => {
      return opt.blockId !== this.selected.blockId;
    });

    if (this.duzenlemeModeli.gun != null && this.duzenlemeModeli.saat != null && this.duzenlemeModeli.derslik != null) {
      let stOffst = 0;
      ders.units.map((un) => {
        un.dayOfTheWeekType = this.duzenlemeModeli.gun;
        un.starTime = this.duzenlemeModeli.saat + stOffst;
        un.endTime = un.starTime + 1;
        un.location = this.duzenlemeModeli.derslik;
        stOffst++;
        let model: UpdateUnitLessonModel = {
          unitLessonId: un.unitLessonId,
          locationId: un.location.locationId,
          starTime: un.starTime,
          endTime: un.endTime,
          dayOfTheWeekType: un.dayOfTheWeekType,
        }
        this.unitLessonService.update(model).subscribe(() => {
          this.toastr.success('Program Güncellendi', 'Başarılı');
        }, (err) => {
          this.toastr.error("Program Güncellenemedi", "Sunucu Hatası");
        });
      });

      console.log('Unitler', ders.units);
      others.push(ders);
      let lessons = [];

      others.map((bls) => {
        bls.units.map((uns) => {
          lessons.push(uns);
        });
      });

      let schedule = new Schedule();
      this.lessons = lessons;
      this.schedule = schedule.make(lessons);

      this.displayDialog = false;
      this.selected = null;
    }
  }


  filtrele() {
    Object.keys(this.filtre).forEach((key, index) => {
      if (this.filtre[key] === null) {
        this.filtre[key] = "";
      }
    });
    this.schedule.filtrele(this.filtre);
  }

  gunSec(gunNo: number) {
    this.goster = gunNo;
    this.dersStyle = {
      wrapper: {
        'font-size': '13px',
        'font-weight': '600px',
      },
      adi: {
        'font-size': '15px',
        'background': 'transparent',
        'padding-left': '20px'
      },
      loc: {
        'padding-left': '20px'
      },
      ins: {
        'padding-left': '20px'
      }

    }
  }

  tumunuSec() {
    this.goster = 6;
    this.dersStyle = {
      adi: {},
      loc: {},
      wrapper: {},
      ins: {}
    };
  }

  async downloadPDF() {
    this.dersStyle = {
      wrapper: {
        'font-size': '13px',
        'font-weight': '600px',
      },
      adi: {
        'font-size': '15px',
        'background': 'transparent',
        'padding-left': '20px'
      },
      loc: {
        'padding-left': '20px'
      },
      ins: {
        'padding-left': '20px'
      }

    }
    this.downPdf = true;
    document.getElementById('body').style.width = "7000px";
    this.toastr.info('PDF oluşturuluyor', 'Lütfen Bekleyiniz');
    setTimeout(async () => {
      const pdf = new jsPDF('l', 'px', [1920, 1080]);
      const saatler = document.getElementById('saatler');
      let saatCanvas = await html2canvas(saatler);
      for (let i = 0; i < 5; i++) {
        const data = document.getElementById('gun' + i);
        let canvas = await html2canvas(data);
        const contentDataURL = canvas.toDataURL('image.png');
        const imgWidth = 1150;
        const imgHeight = 700;
        if (i != 0) pdf.addPage(1920, 1080);
        pdf.addImage(saatCanvas, 'PNG', 100, 85, 35, 664);
        pdf.addImage(contentDataURL, 'PNG', 150, 50, imgWidth, imgHeight);
      }
      pdf.save('schedule.pdf');
      document.getElementById('body').style.width = "100%";

      this.dersStyle = {
        adi: {},
        loc: {},
        wrapper: {},
        ins: {}
      };
      this.downPdf = false;
      this.toastr.success('PDF oluşturuldu', 'Başarılı');
    }, 3000);


  }

}
