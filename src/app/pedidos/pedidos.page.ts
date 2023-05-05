import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

// API
import { Produto, ProdutoService } from '../services/produto.service';
import { Categoria, CategoriaService } from '../services/categoria.service';

//MODALS
import { ModalController } from '@ionic/angular';
import { CategoriaComponent } from '../modals/categoria/categoria.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})

export class PedidosPage implements OnInit {

  public listaProdutos: Produto[] = [];
  public listaCategorias: Categoria[] = [];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.listaProdutos = produtos;
      }
    )
    
    this.categoriaService.getCategorias().subscribe(
      (categorias) => {
        this.listaCategorias = categorias;
      }
    )
  }
  
  // Modal

  async openModal(id: number, nome: string) {
    var idcategoria = id
    var nomecategoria = nome
    const modal = await this.modalCtrl.create({
      component: CategoriaComponent,
      componentProps: {
        idcategoria: idcategoria,
        nomecategoria: nomecategoria
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
  
  // @ViewChild(IonModal) modal!: IonModal;
  // menuType: string = 'overlay';

  // cancel() {
  //   this.modal.dismiss(null, 'cancel');
  // }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  // }
}
