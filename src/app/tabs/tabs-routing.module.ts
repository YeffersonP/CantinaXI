import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosPageModule)
      },
      {
        path: 'financas',
        loadChildren: () => import('../financas/financas.module').then(m => m.FinancasPageModule)
      },
      {
        path: 'estoque',
        loadChildren: () => import('../estoque/estoque.module').then(m => m.EstoquePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pedidos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
