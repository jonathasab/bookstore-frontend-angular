import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria : Categoria ={
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router)
  {

  }

  ngOnInit(): void {
  }

  Create():void{
      this.service.Create(this.categoria).subscribe((resp) =>{
          this.router.navigate(['categorias']);
          this.service.Mensagem('Categoria criada com sucesso!');
      }, err =>{
        for(let cont = 0; cont < err.error.errors.length; cont++){
          this.service.Mensagem(err.error.errors[cont].message);
        }
      })
  }

  CreateCancel():void{
    this.router.navigate(['categorias']);
  }
}
