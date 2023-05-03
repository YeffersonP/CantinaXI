import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Produto, ProdutoService } from '../services/produto.service';

import { ModalController } from '@ionic/angular';
import { ProdutoComponent } from '../modals/produto/produto.component';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.page.html',
  styleUrls: ['./estoque.page.scss'],
})

export class EstoquePage implements OnInit {

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

  async openModal(id: number) {
    var idproduto = id
    const modal = await this.modalCtrl.create({
      component: ProdutoComponent,
      componentProps: {
        idproduto: idproduto
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

  // @ViewChild(IonModal) modal!: IonModal;
  // isModalOpen = false;
  
  // cancel() {
  //   this.modal.dismiss();
  // }
  
  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  // }

}
