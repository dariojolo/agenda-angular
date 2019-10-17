import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Persona } from '../clases/Persona';




@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlEndPoint = 'http://localhost:8080/api/personas';
  private httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });


  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    // return of(CLIENTES);
    // return this.http.get<Cliente[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Persona[])
    );
  }
  create(cliente: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.urlEndPoint, cliente, { headers: this.httpHeaders });
  }
  getCliente(id): Observable<Persona> {
    return this.http.get<Persona>(`${this.urlEndPoint}/${id}`);
  }
  update(cliente: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.urlEndPoint}/${cliente.id}`, cliente, { headers: this.httpHeaders });
  }
  delete(id: number): Observable<Persona> {
    return this.http.delete<Persona>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

}
