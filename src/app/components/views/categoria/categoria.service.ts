import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  FindAll():Observable<Categoria[]>{
    const url = `${this.baseUrl}\categorias`
    return this.http.get<Categoria[]>(url)
  }

  
  FindbyId(id: String):Observable<Categoria>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Categoria>(url)
  }

  Create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}\categorias`
    return this.http.post<Categoria>(url, categoria)
  }

  Delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url)
  }

  Mensagem(str: String): void{
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
