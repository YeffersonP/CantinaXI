import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Categoria{
  id:             number,
  nome:           string
}

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  private URL = 'http://localhost:8080/api/categoria'
  constructor(private http: HttpClient) { }

  getCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.URL);
  }
}
