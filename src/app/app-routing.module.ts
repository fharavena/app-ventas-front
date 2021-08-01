import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { NotfoundComponent } from './components/common/notfound/notfound.component';
import { SaleaddComponent } from './components/sale/saleadd/saleadd.component';
import { SaledetailComponent } from './components/sale/saledetail/saledetail.component';
import { SaleeditComponent } from './components/sale/saleedit/saleedit.component';
import { SalelistComponent } from './components/sale/salelist/salelist.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  // sales
  { path: 'venta', component: SalelistComponent },
  { path: 'venta/detalle/:id', component: SaledetailComponent },
  { path: 'venta/crear', component: SaleaddComponent },
  { path: 'venta/editar/:id', component: SaleeditComponent },
  
  { path: '**', component: NotfoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
