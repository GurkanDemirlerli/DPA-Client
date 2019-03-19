export interface LocationModel {
    locationId?: number;
    title?: string;
    facultyId?: number;
}

export interface AddLocationModel {
    title: string;
    facultyId: number;
}

export interface UpdateLocationModel {
    title: string;
    facultyId: number;
}