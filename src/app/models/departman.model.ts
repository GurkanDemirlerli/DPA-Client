export interface DepartmanModel {
    departmanId?: number;
    title?: string;
    departmanCode?: string;
    facultyId?: number;
}

export interface AddDepartmanModel {
    title: string;
    departmanCode: string;
    facultyId: number;
}

export interface UpdateDepartmanModel {
    title: string;
    departmanCode: string;
    facultyId: number;
}