import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleDetail } from 'src/app/model/saleDetail';
import { SaleService } from 'src/app/service/sale.service';

@Component({
  selector: 'app-saledetail',
  templateUrl: './saledetail.component.html',
  styleUrls: ['./saledetail.component.css']
})
export class SaledetailComponent implements OnInit {

  saleDetail: Array<SaleDetail>;
  idSale = this.route.snapshot.params.id;
  msgError;

  constructor(private saleService: SaleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSaleDetail();
  }

  getSaleDetail() {
    this.saleService.get_sale(this.idSale).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.saleDetail = response["data"];
        } else {
          console.warn("Error");
        }
      },
      error => {
        if(error["error"]["message"]){
          this.msgError = error["error"]["message"];
        }else{
          this.msgError = "Error desconocido";
        }
      });

  }

}


