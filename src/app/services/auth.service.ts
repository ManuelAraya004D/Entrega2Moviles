import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';  // Importamos 'of' de 'rxjs'
import { Users, UserNuevo, justificacionNueva } from 'src/interfaces/user';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  
  getAllUsers(): Observable<Users[]> {
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }


  getByUsername(usuario: any): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${usuario}`);
  }

  getByUsuario(usuario: string): Observable<Users | undefined> {
    return this.getAllUsers().pipe(
      map(users => users.find(user => user.username === usuario)),  
      catchError(err => {
        console.error('Error en getByUsername:', err);
        return of(undefined);  
      })
    );
  }
  
  postUsuario(newUsuario: UserNuevo): Observable<UserNuevo> {
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }



 
  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }

  
  updateUser(userId: string, updatedUser: Users): Observable<Users> {
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuarios/${userId}`, updatedUser);
}

  
}