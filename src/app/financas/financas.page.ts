import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.page.html',
  styleUrls: ['./financas.page.scss'],
})
export class FinancasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(IonModal) modal!: IonModal;
  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }
}
