import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  titulo = new FormControl('', [Validators.minLength(3)])
  nomeAutor = new FormControl('', [Validators.minLength(3)])
  texto = new FormControl('', [Validators.minLength(10)])
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

  GetMessage(){
    if(this.titulo.invalid)
    {
      return 'O campo Título deve conter entre 3 e 100 caracteres'
    }
    if(this.nomeAutor.invalid)
    {
      return 'O campo Nome do Autor deve conter entre 3 e 100 caracteres'
    } 
    if(this.texto.invalid)
    {
      return 'O campo Texto deve conter entre 10 e 2.000.000 caracteres'
    }
    return false;
  }

  Update():void{
    this.service.Update(this.livro).subscribe((resp) =>{
        this.router.navigate([`categorias/${this.idCategoria}/livros`]);
        this.service.Mensagem('livro criado com sucesso!');
    }, err =>{
      for(let cont = 0; cont < err.error.errors.length; cont++){
        this.service.Mensagem(err.error.errors[cont].message);
      }
    })
}

UpdateCancel():void{
  this.router.navigate([`categorias/${this.idCategoria}/livros`]);
}

}
