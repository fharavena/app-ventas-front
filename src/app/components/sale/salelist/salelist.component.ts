import { Component, OnInit } from '@angular/core';
import { SaleSimple } from 'src/app/model/saleSimple';
import { SaleService } from 'src/app/service/sale.service';

@Component({
  selector: 'app-salelist',
  templateUrl: './salelist.component.html',
  styleUrls: ['./salelist.component.css']
})
export class SalelistComponent implements OnInit {

  ventas: Array<SaleSimple>;

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.getSales();
  }
  getSales() {
    this.saleService.get_sales().subscribe(response => {
      if (response['status'] == 'success') {
        this.ventas = response['data'];
      } else {
        console.warn("Error");
      }
    }
    )
  }

  deleteSale(id) {
    

  }

}
