import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];

  id_categoria: String = ''

  livros: Livro[] = []


  constructor(private service: LivroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_categoria = this.route.snapshot.paramMap.get('id_categoria')!
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_categoria).subscribe((resposta) => {
      this.livros = resposta;
      console.log(this.livros)
    })

  }

}
