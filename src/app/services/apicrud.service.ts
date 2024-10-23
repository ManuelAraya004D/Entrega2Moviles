import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users,Justificacion } from 'src/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  getUserId(id:number):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  putUsuarios(usuario:any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }

  deleteJustificacion(usuarioId: string, justificacionId: string): Observable<Users> {
    return this.httpclient.delete<Users>(`${environment.apiUrl}/usuarios/${usuarioId}/justificaciones/${justificacionId}`);
}
  



  putJustificacion(usuario:any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }




}
