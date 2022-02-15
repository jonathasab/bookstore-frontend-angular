import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  idCategoria : String = '';
  
  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];
  livros : Livro[] = [];
  
  constructor(private service : LivroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idCategoria = this.route.snapshot.paramMap.get('idCategoria')!;
    this.FindAll();
  }

  NavegarLivrosCreate(){
    this.router.navigate([`categorias/${this.idCategoria}/livros/create`])
  }

  FindAll()
  {   
    this.service.FindByCategoriaId(this.idCategoria).subscribe(resp => {
        this.livros = resp;
    })
  }

}
