import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

  idCategoria : String = '';

  livro : Livro ={
    id!: '',
    titulo: '',
    nomeAutor: '',
    texto: ''
  }

  constructor(private service : LivroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idCategoria = this.route.snapshot.paramMap.get('idCategoria')!;
    this.livro.id =  this.route.snapshot.paramMap.get('id')!;
    this.FindById();
  }

  FindById(): void
  {
    this.service.FindbyId(this.livro.id!).subscribe((resp) => {
      this.livro = resp;
    })
  }

  Delete():void{
    this.service.Delete(this.livro.id!).subscribe((resp) =>{
        this.router.navigate([`categorias/${this.idCategoria}/livros`]);
        this.service.Mensagem('livro criado com sucesso!');
    }, err =>{
      for(let cont = 0; cont < err.error.errors.length; cont++){
        this.service.Mensagem(err.error.errors[cont].message);
      }
    })
  }

  DeleteCancel():void{
    this.router.navigate([`categorias/${this.idCategoria}/livros`]);
  }
}
