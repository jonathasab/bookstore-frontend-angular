import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  FindByCategoriaId(idCategoria: String):Observable<Livro[]>{
    const url = `${this.baseUrl}/livros/FindByCategoriaId?idCategoria=${idCategoria}`
    return this.http.get<Livro[]>(url)
  }

  
  FindbyId(id: String):Observable<Livro>{
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.get<Livro>(url)
  }

  Create(livro: Livro, idCategoria: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros/${idCategoria}`
    return this.http.post<Livro>(url, livro)
  }

  Delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.delete<void>(url)
  }

  Update(livro: Livro): Observable<void>{
    const url = `${this.baseUrl}/livros/${livro.id!}`
    return this.http.put<void>(url, livro)
  }

  Mensagem(str: String): void{
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}