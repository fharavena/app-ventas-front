import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotfoundComponent } from './components/common/notfound/notfound.component';
import { HomeComponent } from './components/common/home/home.component';
import { SalelistComponent } from './components/sale/salelist/salelist.component';
import { SaleaddComponent } from './components/sale/saleadd/saleadd.component';
import { SaleeditComponent } from './components/sale/saleedit/saleedit.component';
import { ClienteditComponent } from './components/client/clientedit/clientedit.component';
import { ClientaddComponent } from './components/client/clientadd/clientadd.component';
import { ClientlistComponent } from './components/client/clientlist/clientlist.component';
import { ProductlistComponent } from './components/product/productlist/productlist.component';
import { ProductaddComponent } from './components/product/productadd/productadd.component';
import { ProducteditComponent } from './components/product/productedit/productedit.component';
import { SaledetailComponent } from './components/sale/saledetail/saledetail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    HomeComponent,
    SalelistComponent,
    SaleaddComponent,
    SaleeditComponent,
    ClienteditComponent,
    ClientaddComponent,
    ClientlistComponent,
    ProductlistComponent,
    ProductaddComponent,
    ProducteditComponent,
    SaledetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
