import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from 'src/interfaces/user';

@Component({
  selector: 'app-ver-asistencia',
  templateUrl: './ver-asistencia.page.html',
  styleUrls: ['./ver-asistencia.page.scss'],
})
export class VerAsistenciaPage implements OnInit {
  asignatura: Asignatura | null = null;
  asistencias: { fecha: string; estado: string; asignaturaNombre: string }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['asignatura']) {
        this.asignatura = JSON.parse(params['asignatura']);
        this.asistencias = this.asignatura?.asistencias || [];
      }
    });
  }
}
