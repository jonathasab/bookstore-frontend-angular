import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  titulo = new FormControl('', [Validators.minLength(3)])
  nomeAutor = new FormControl('', [Validators.minLength(3)])
  texto = new FormControl('', [Validators.minLength(10)])
  idCategoria : String = '';

  livro : Livro ={
    titulo: '',
    nomeAutor: '',
    texto: ''
  }

  constructor(private service : LivroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idCategoria = this.route.snapshot.paramMap.get('idCategoria')!;
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

  Create():void{
    this.service.Create(this.livro, this.idCategoria).subscribe((resp) =>{
        this.router.navigate([`categorias/${this.idCategoria}/livros`]);
        this.service.Mensagem('livro criado com sucesso!');
    }, err =>{
      for(let cont = 0; cont < err.error.errors.length; cont++){
        this.service.Mensagem(err.error.errors[cont].message);
      }
    })
}

CreateCancel():void{
  this.router.navigate([`categorias/${this.idCategoria}/livros`]);
}

}
