export interface FacultyModel {
    facultyId?: number;
    title?: string;
    facultyCode?: string;
}

export interface AddFacultyModel {
    title: string;
    facultyCode: string;
}

export interface UpdateFacultyModel {
    title: string;
    facultyCode: string;
}