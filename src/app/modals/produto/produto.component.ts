import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Produto, ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent  implements OnInit {

  idproduto!: number;
  infoProduto!: Produto;
  public listaProdutos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private modalCtrl: ModalController
    ) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.listaProdutos = produtos;
        this.infoProduto = produtos[this.idproduto - 1];
        console.log(this.infoProduto)
      }
    )
  }

}
