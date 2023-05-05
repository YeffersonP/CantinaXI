import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { Categoria, CategoriaService } from 'src/app/services/categoria.service';
import { Produto, ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent  implements OnInit {

  idcategoria!: number;
  nomecategoria!: string;
  public listaProdutos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.listaProdutos = produtos;
      }
    )
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  addProduto(id: number) {
    console.log(id)
  }

}
