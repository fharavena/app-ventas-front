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
  msgError;
  msgDelete;

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.getSales();
  }
  getSales() {
    this.saleService.get_sales().subscribe(
      response => {
        if (response["error"]) {
          console.log("error");
        }
        if (response['status'] == 'success') {
          this.ventas = response['data'];
        } else {
          console.warn("Error");
        }
      }, error => {
        if (error["message"]) {
          this.msgError = error["message"];
        } else {
          this.msgError = "Error desconocido"
        }
      }
    )
  }

  deleteSale(id) {
    this.saleService.delete_sale(id).subscribe(
      response => {
        this.msgDelete = response["action"];
        this.getSales();
      }, error => {
        if (error["message"]) {
          this.msgError = error["message"];
        } else {
          this.msgError = "Error desconocido"
        }
      }
    )


  }

}
