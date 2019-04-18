export class ScheduleDay {
    columns: ScheduleColumn[] = [];
}

export class ScheduleColumn {
    lessons: ScheduleLesson[] = [];
}

export class ScheduleLesson {
    id: number;
    name: string;
    group: string;
    hour: number;
    length: number;
    day: number;
    location: ScheduleLocation;
    instructors: ScheduleInstructors[];
}

export class ScheduleLocation {
    id: number;
    name: string;
}

export class ScheduleInstructors {
    id: number;
    name: string;
}



export class Schedule {
    public days: ScheduleDay[] = [];
    private rawData: ScheduleLesson[];
    private filtresiz: ScheduleLesson[];
    private gunSayisi = 5;

    public make(lessons: ScheduleLesson[]): Schedule {
        this.rawData = lessons;
        this.filtresiz = lessons;
        for (let i = 0; i < this.gunSayisi; i++) {
            this.days.push(this.gunOlustur(i));
        }
        return this;
    }

    public filtere(filtre: any) {
        let ismeGoreFiltrelenmis = this.filtresiz.filter((opt) => opt.name.toLowerCase().includes(filtre.name.toLowerCase()));
        ismeGoreFiltrelenmis = ismeGoreFiltrelenmis.filter((opt) => opt.location.name.toLocaleLowerCase().includes(filtre.loc.toLowerCase()));
        ismeGoreFiltrelenmis = ismeGoreFiltrelenmis.filter((opt) => {
            return opt.instructors.some((ins) => {
                return ins.name.toLocaleLowerCase().includes(filtre.ins.toLowerCase())
            })
        })
        this.rawData = ismeGoreFiltrelenmis;

        this.days = [];
        for (let i = 0; i < this.gunSayisi; i++) {
            this.days.push(this.gunOlustur(i));
        }
        return this;
    }

    private gunOlustur(gunNo): ScheduleDay {
        let sutunNo = 0;
        let day: ScheduleDay = new ScheduleDay();
        while (this.dersleriFiltere(gunNo).length > 0) {
            day.columns.push(this.sutunOlustur(gunNo, sutunNo));
            sutunNo++;
        }
        return day;
    }

    public secilebilirSaatler(dersId: number, gunNo: number) {
        let ders = this.filtresiz.find((opt) => {
            return opt.id === dersId;
        });

        let others = this.filtresiz.filter((opt) => {
            return opt.id !== dersId;
        });

        let gunDersleri = others.filter((opt) => {
            return opt.day === gunNo;
        });

        let saatler: number[] = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

        let oGunVerilenDersler = gunDersleri.filter((opt) => {
            return opt.instructors.some((ins) => {
                for (let i = 0; i < ders.instructors.length; i++) {
                    if (ders.instructors[i].id === ins.id) {
                        return true;
                    }
                }
            })
        });


        for (let i = 0; i < oGunVerilenDersler.length; i++) {
            let drs = oGunVerilenDersler[i];
            for (let j = drs.hour; j < (drs.length + drs.hour); j++) {
                saatler = saatler.filter((saat) => {
                    return (saat !== j)
                });
            }
        }
        let tempSaatler = saatler;

        saatler = saatler.filter((saat) => {
            let status = true;
            for (let i = 1; i < ders.length; i++) {
                if (!tempSaatler.includes(saat + i)) {
                    return false;
                }
            }
            return status;

        });

        console.log("Kullanilabilir Saatler", saatler);

        return saatler;

    }

    secilebilirDerslikler(dersId: number, gunNo: number, saatNo: number) {
        let ders: ScheduleLesson = this.filtresiz.find((opt) => {
            return opt.id === dersId;
        });

        let others: ScheduleLesson[] = this.filtresiz.filter((opt) => {
            return opt.id !== dersId;
        });

        let gunDersleri = others.filter((opt) => {
            return opt.day === gunNo;
        });

        let derslikler: ScheduleLocation[] = [];

        for (let i = 0; i < this.filtresiz.length; i++) {
            const element = this.filtresiz[i];
            let eklenebilir = false;
            const bulunan = derslikler.filter((opt) => {
               return opt.id === element.location.id;
            });
            if (bulunan.length < 1) {
                eklenebilir = true;
            }

            if (eklenebilir) {
                derslikler.push(element.location);
            }
            eklenebilir = false;
        }

        let secilebilirDerslikler: ScheduleLocation[] = [];

        let eszamanliDersler: ScheduleLesson[] = gunDersleri.filter((opt) => {
            let kirmiziAralik: number[] = [];
            for (let i = saatNo; i < saatNo + ders.length; i++) {
                kirmiziAralik.push(i);
            }

            for (let i = opt.hour; i < opt.hour + opt.length; i++) {
                if (kirmiziAralik.includes(i)) {
                    return true;
                }
            }
            return false;
        });

        console.log("Es zamanli", eszamanliDersler);

        secilebilirDerslikler = derslikler.filter((opt) => {
            for (let i = 0; i < eszamanliDersler.length; i++) {
                const eszamanli = eszamanliDersler[i];
                if (opt.id === eszamanli.location.id) {
                    return false;
                }
            }
            return true;
        });

        return secilebilirDerslikler;

    }

    private sutunOlustur(gunNo, sutunNo): ScheduleColumn {
        let dersler = this.dersleriFiltere(gunNo);
        let column: ScheduleColumn = new ScheduleColumn();
        let eklenebilir = true;
        let eklenecekDers: ScheduleLesson = dersler[0];

        for (let i = 1; i < dersler.length; i++) {
            if (dersler[i].hour < eklenecekDers.hour) {
                eklenecekDers = dersler[i];
            }
        }
        column.lessons.push(eklenecekDers);
        this.rawData = this.rawData.filter((ls) => ls.id != eklenecekDers.id);
        dersler = this.dersleriFiltere(gunNo);


        while (eklenebilir) {
            eklenebilir = false;
            if (dersler.length < 1) {
                return column;
            }
            for (let i = 0; i < dersler.length; i++) {
                if (dersler[i].hour >= (column.lessons[column.lessons.length - 1].hour + column.lessons[column.lessons.length - 1].length)) {
                    if (!eklenebilir) {
                        eklenecekDers = dersler[i];
                        eklenebilir = true;
                    }
                    else if (dersler[i].hour < eklenecekDers.hour) {
                        eklenebilir = true;
                        eklenecekDers = dersler[i];
                    }
                }
            }
            if (eklenebilir) {
                column.lessons.push(eklenecekDers);
                this.rawData = this.rawData.filter((ls) => ls.id != eklenecekDers.id);
                dersler = this.dersleriFiltere(gunNo);
            } else {
                return column;
            }
        }

        return column;
    }

    private dersleriFiltere(gunNo) {
        return this.rawData.filter((ls) => ls.day == gunNo);
    }

}