import { Observable, of } from 'rxjs';

export class MockServiceBase<Model, AddModel, UpdateModel> {
    constructor(
        protected idField: string,
        protected data
    ) { }


    getAll(): Observable<Model[]> {
        return of<Model[]>(this.data);
    }

    get(id: number): Observable<Model> {
        let model: Model = this.data.find(x => x[this.idField] == id);
        return of<Model>(model);
    }

    add(addModel: AddModel): Observable<void> {
        let model = Object.assign({}, addModel);
        model[this.idField] = this.data.length + 1;
        let data = [...this.data];
        data.push(model);
        this.data = data;
        return of(null);
    }

    update(updateModel: UpdateModel, id: number): Observable<void> {
        let data = [...this.data];
        let oldModel: Model = this.data.find(x => x[this.idField] === id);
        let model = Object.assign({}, updateModel);
        model[this.idField] = id;
        let index = data.indexOf(oldModel);
        data = data.filter((val, i) => i != index);
        data.push(model);
        this.data = data;
        return of(null);
    }

    delete(id: number): Observable<void> {
        let data = [...this.data];
        let model: Model = this.data.find(x => x[this.idField] === id);
        let index = data.indexOf(model);
        data = data.filter((val, i) => i != index);
        this.data = data;
        return of(null);
    }
}