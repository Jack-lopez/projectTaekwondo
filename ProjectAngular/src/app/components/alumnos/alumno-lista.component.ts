import { Component, OnInit } from '@angular/core';

import { IAlumno } from './alumno';
import { AlumnoService } from './alumno.service';

@Component({
	selector: 'lista-alumnos',
	templateUrl: './alumno-lista.component.html'
})
export class AlumnoListaComponent implements OnInit {
	alumnos: IAlumno[];
	mensajeError: string;

	constructor(private _alumnoService: AlumnoService) {

	}

	ngOnInit() {
		this._alumnoService.getAlumnos()
				.subscribe(alumnos => this.alumnos = alumnos, 
						   error => this.mensajeError = <any>error);
	}

}