import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaReadComponent } from "./components/views/categoria/categoria-read/categoria-read.component";
import { HomeComponent } from "./components/views/home/home.component";
import { CategoriaCreateComponent } from "./components/views/categoria/categoria-create/categoria-create.component";
import { CategoriaDeleteComponent } from "./components/views/categoria/categoria-delete/categoria-delete.component";
import { CategoriaUpdateComponent } from "./components/views/categoria/categoria-update/categoria-update.component";
import { LivroReadComponent } from "./components/views/livro/livro-read/livro-read.component";
import { LivroCreateComponent } from "./components/views/livro/livro-create/livro-create.component";
import { LivroUpdateComponent } from "./components/views/livro/livro-update/livro-update.component";
import { LivroDeleteComponent } from "./components/views/livro/livro-delete/livro-delete.component";
import { LivroReadTextComponent } from "./components/views/livro/livro-read-text/livro-read-text.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "categorias",
    component: CategoriaReadComponent,
  }  ,
  {
    path: "categorias/create",
    component: CategoriaCreateComponent,
  } ,
  {
    path: "categorias/delete/:id",
    component: CategoriaDeleteComponent,
  } ,
  {
    path: "categorias/update/:id",
    component: CategoriaUpdateComponent,
  } ,
  {
    path: "categorias/:idCategoria/livros",
    component: LivroReadComponent,
  } ,
  {
    path: "categorias/:idCategoria/livros/create",
    component: LivroCreateComponent,
  } ,
  {
    path: "categorias/:idCategoria/livros/:id/update",
    component: LivroUpdateComponent,
  } ,
  {
    path: "categorias/:idCategoria/livros/:id/delete",
    component: LivroDeleteComponent,
  }  ,
  {
    path: "categorias/:idCategoria/livros/:id/read",
    component: LivroReadTextComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
