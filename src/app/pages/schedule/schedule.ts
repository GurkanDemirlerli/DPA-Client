import * as _ from 'lodash';
import { ScheduleDay, ScheduleUnit, ScheduleBlock, ScheduleColumn, ScheduleLocation } from 'src/app/models/schedule.model';


export class Schedule {
    public days: ScheduleDay[] = [];
    private rawUnit: ScheduleUnit[];
    private rawBlock: ScheduleBlock[];
    public filtresizBL: ScheduleBlock[];
    public filtresizUn: ScheduleUnit[];
    private gunSayisi = 5;

    public make(units: ScheduleUnit[]) {
        this.rawUnit = units;
        this.filtresizUn = units;
        this.unitsToBlocks();

        for (let i = 1; i <= this.gunSayisi; i++) {
            this.days.push(this.gunOlustur(i));
        }

        return this;
    }

    private unitsToBlocks() {
        let units = this.rawUnit;
        let derslereGoreAyrilmis: ScheduleBlock[] = [];
        for (let i = 0; i < units.length; i++) {
            const element = units[i];
            let yeniDersBulundu = true;

            for (let j = 0; j < derslereGoreAyrilmis.length; j++) {
                if (derslereGoreAyrilmis[j].units.length > 0) {
                    if (derslereGoreAyrilmis[j].units[0].lesson.lessonId === element.lesson.lessonId && derslereGoreAyrilmis[j].units[0].groupType === element.groupType && derslereGoreAyrilmis[j].units[0].dayOfTheWeekType === element.dayOfTheWeekType && derslereGoreAyrilmis[j].units[0].educationType === element.educationType) {
                        derslereGoreAyrilmis[j].units.push(element);
                        yeniDersBulundu = false;
                        break;
                    }
                }
            }

            if (yeniDersBulundu) {
                let yeniBlock = new ScheduleBlock();
                yeniBlock.units[0] = element;
                derslereGoreAyrilmis.push(yeniBlock);
            }
        }

        let siralanmis: ScheduleBlock[] = [];
        for (let i = 0; i < derslereGoreAyrilmis.length; i++) {
            const element = derslereGoreAyrilmis[i];
            let sr = _.sortBy(element.units, o => o.starTime);
            siralanmis[i] = new ScheduleBlock();
            siralanmis[i].units = sr;
            siralanmis[i].blockId = i;
        }

        this.rawBlock = siralanmis;
        this.filtresizBL = siralanmis;
    }

    gunOlustur(gunNo: number) {
        let sutunNo = 0;
        let day: ScheduleDay = new ScheduleDay();
        while (this.dersleriFiltrele(gunNo).length > 0) {
            day.columns.push(this.sutunOlustur(gunNo, sutunNo));
            sutunNo++;
        }
        return day;
    }

    dersleriFiltrele(gunNo: number): ScheduleBlock[] {
        return this.rawBlock.filter((bl) => {
            if (bl.units[0].dayOfTheWeekType === gunNo) {
                return true;
            }
        });
    }

    sutunOlustur(gunNo, sutunNo) {
        let dersler = this.dersleriFiltrele(gunNo);
        let column: ScheduleColumn = new ScheduleColumn();
        let eklenebilir = true;
        let eklenecekDers: ScheduleBlock = dersler[0];

        for (let i = 1; i < dersler.length; i++) {
            if (dersler[i].units[0].starTime < eklenecekDers.units[0].starTime) {
                eklenecekDers = dersler[i];
            }
        }
        column.blocks.push(eklenecekDers);

        this.rawBlock = this.rawBlock.filter((bl) => bl.blockId != eklenecekDers.blockId);
        dersler = this.dersleriFiltrele(gunNo);

        while (eklenebilir) {
            eklenebilir = false;
            if (dersler.length < 1) {
                return column;
            }
            for (let i = 0; i < dersler.length; i++) {
                if (dersler[i].units[0].starTime >= (column.blocks[column.blocks.length - 1].units[0].starTime + column.blocks[column.blocks.length - 1].units.length)) {
                    if (!eklenebilir) {
                        eklenecekDers = dersler[i];
                        eklenebilir = true;
                    }
                    else if (dersler[i].units[0].starTime < eklenecekDers.units[0].starTime) {
                        eklenebilir = true;
                        eklenecekDers = dersler[i];
                    }
                }
            }
            if (eklenebilir) {
                column.blocks.push(eklenecekDers);
                this.rawBlock = this.rawBlock.filter((bl) => bl.blockId != eklenecekDers.blockId);
                dersler = this.dersleriFiltrele(gunNo);
            } else {
                return column;
            }
        }

        return column;
    }

    public filtrele(filtre: any) {
        let ismeGoreFiltrelenmis = this.filtresizBL.filter((opt) => opt.units[0].lesson.name.toLocaleLowerCase().includes(filtre.name.toLocaleLowerCase()));
        ismeGoreFiltrelenmis = ismeGoreFiltrelenmis.filter((opt) => opt.units[0].location.title.toLocaleLowerCase().includes(filtre.loc.toLocaleLowerCase()));
        ismeGoreFiltrelenmis = ismeGoreFiltrelenmis.filter((opt) => (opt.units[0].user.name + opt.units[0].user.surname).toLocaleLowerCase().includes(filtre.ins.toLocaleLowerCase()));
        if (filtre.grp) {
            ismeGoreFiltrelenmis = ismeGoreFiltrelenmis.filter((opt) => opt.units[0].groupType === Number(filtre.grp));
        }
        if (filtre.semester) {
            ismeGoreFiltrelenmis = ismeGoreFiltrelenmis.filter((opt) => opt.units[0].lesson.semesterType === Number(filtre.semester));

        }

        this.rawBlock = ismeGoreFiltrelenmis;

        this.days = [];
        for (let i = 1; i <= this.gunSayisi; i++) {
            this.days.push(this.gunOlustur(i));
        }
        return this;
    }

    public secilebilirGunler(blockId: number) {
        let ders = this.filtresizBL.find((opt) => {
            return opt.blockId === blockId;
        });

        let others = this.filtresizBL.filter((opt) => {
            return opt.blockId !== blockId;
        });

        let secilebilirler = [1, 2, 3, 4, 5];

        others.map((opt) => {
            if (opt.units[0].lesson.lessonId === ders.units[0].lesson.lessonId && opt.units[0].groupType === ders.units[0].groupType && opt.units[0].educationType === ders.units[0].educationType) {
                secilebilirler = secilebilirler.filter((gun) => {
                    if (gun === opt.units[0].dayOfTheWeekType) {
                        return false;
                    } else {
                        return true;
                    }
                })
            }
        });

        return secilebilirler;
    }

    public secilebilirSaatler(blockId: number, gunNo: number) {
        let ders = this.filtresizBL.find((opt) => {
            return opt.blockId === blockId;
        });

        let others = this.filtresizBL.filter((opt) => {
            return opt.blockId !== blockId;
        });

        let gunDersleri = others.filter((opt) => {
            return opt.units[0].dayOfTheWeekType === gunNo;
        });

        let saatler: number[] = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

        let oGunVerilenDersler = gunDersleri.filter((opt) => {
            return opt.units[0].user.userId === ders.units[0].user.userId;
        });


        for (let i = 0; i < oGunVerilenDersler.length; i++) {
            let drs = oGunVerilenDersler[i];
            for (let j = drs.units[0].starTime; j < (drs.units.length + drs.units[0].starTime); j++) {
                saatler = saatler.filter((saat) => {
                    return (saat !== j)
                });
            }
        }
        let tempSaatler = saatler;

        saatler = saatler.filter((saat) => {
            let status = true;
            for (let i = 1; i < ders.units.length; i++) {
                if (!tempSaatler.includes(saat + i)) {
                    return false;
                }
            }
            return status;

        });


        return saatler;

    }


    secilebilirDerslikler(blockId: number, gunNo: number, saatNo: number) {
        let ders = this.filtresizBL.find((opt) => {
            return opt.blockId === blockId;
        });

        let others = this.filtresizBL.filter((opt) => {
            return opt.blockId !== blockId;
        });

        let gunDersleri = others.filter((opt) => {
            return opt.units[0].dayOfTheWeekType === gunNo;
        });

        let derslikler: ScheduleLocation[] = [];

        for (let i = 0; i < this.filtresizBL.length; i++) {
            const element = this.filtresizBL[i];
            let eklenebilir = false;
            const bulunan = derslikler.filter((opt) => {
                return opt.locationId === element.units[0].location.locationId;
            });
            if (bulunan.length < 1) {
                eklenebilir = true;
            }

            if (eklenebilir) {
                derslikler.push(element.units[0].location);
            }
            eklenebilir = false;
        }

        let secilebilirDerslikler: ScheduleLocation[] = [];

        let eszamanliDersler = gunDersleri.filter((opt) => {
            let kirmiziAralik: number[] = [];
            for (let i = saatNo; i < saatNo + ders.units.length; i++) {
                kirmiziAralik.push(i);
            }

            for (let i = opt.units[0].starTime; i < opt.units[0].starTime + opt.units.length; i++) {
                if (kirmiziAralik.includes(i)) {
                    return true;
                }
            }
            return false;
        });


        secilebilirDerslikler = derslikler.filter((opt) => {
            for (let i = 0; i < eszamanliDersler.length; i++) {
                const eszamanli = eszamanliDersler[i];
                if (opt.locationId === eszamanli.units[0].location.locationId) {
                    return false;
                }
            }
            return true;
        });

        return secilebilirDerslikler;

    }

}

//TODO Değiştririken 1. öğretim varsa 2. öğretim eklemiyo ayrı ele al