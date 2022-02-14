import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria : Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }
  
  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.FindById();
  }

  FindById(): void
  {
    this.service.FindbyId(this.categoria.id!).subscribe((resp) => {
      this.categoria = resp;
    })
  }

  Update():void{
    this.service.Update(this.categoria).subscribe((resp) =>{
        this.router.navigate(['categorias']);
        this.service.Mensagem('Categoria Atualizada com sucesso!');
    }, err =>{
      for(let cont = 0; cont < err.error.errors.length; cont++){
        this.service.Mensagem(err.error.errors[cont].message);
      }
    })
  }

  UpdateCancel():void{
    this.router.navigate(['categorias']);
  }
}
