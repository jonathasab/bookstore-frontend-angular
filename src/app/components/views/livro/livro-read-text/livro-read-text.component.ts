import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-read-text",
  templateUrl: "./livro-read-text.component.html",
  styleUrls: ["./livro-read-text.component.css"],
})
export class LivroReadTextComponent implements OnInit {
  idCategoria: String = "";

  livro: Livro = {
    id: "",
    titulo: "",
    nomeAutor: "",
    texto: "",
  };

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idCategoria = this.route.snapshot.paramMap.get("idCategoria")!;
    this.livro.id = this.route.snapshot.paramMap.get("id")!;
    this.FindById();
  }

  FindById(): void {
    this.service.FindbyId(this.livro.id!).subscribe((resp) => {
      this.livro = resp;
    });
  }

  Cancel(): void {
    this.router.navigate([`categorias/${this.idCategoria}/livros`]);
  }
}
