import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Produto{
  id:             number,
  nome:           string,
  preco:          number,
  qtdestoque:     number,
  usuario:        string,
  fornecedor:     number,
  categoria:      string
}

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  private URL = 'http://localhost:8080/api/produto'
  constructor(private http: HttpClient) { }

  getProdutos():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.URL);
  }
}
