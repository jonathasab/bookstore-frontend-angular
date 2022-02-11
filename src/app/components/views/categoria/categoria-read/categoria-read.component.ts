import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];
  categorias : Categoria[] = [];
  constructor(private service : CategoriaService) { }

  ngOnInit(): void {
    this.FindAll();
  }

  FindAll()
  {
    this.service.FindAll().subscribe(resp => {
        this.categorias = resp;
    })
  }
}
