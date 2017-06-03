import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IAlumno } from './alumno';

@Injectable()
export class AlumnoService {
	private _alumnosUrl = "http://localhost:1337/alumno";

	constructor(private _http: Http) {

	}

	getAlumnos(): Observable<IAlumno[]> {
		return this._http.get(this._alumnosUrl)
			.map((response: Response) => <IAlumno[]>response.json())
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.log(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}