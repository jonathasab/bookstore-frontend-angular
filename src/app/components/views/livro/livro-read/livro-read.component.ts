import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../Livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];
  livros : Livro[] = [];
  
  constructor(private service : LivroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.FindAll();
  }

  NavegarLivrosCreate(){
    this.router.navigate(["categorias/create"])
  }

  FindAll()
  {    
    let id = this.route.snapshot.paramMap.get('id')!;

    this.service.FindByCategoriaId(id).subscribe(resp => {
        this.livros = resp;
    })
  }

}
