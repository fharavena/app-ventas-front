import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientDTO } from 'src/app/model/clientDTO';
import { ProductDTO } from 'src/app/model/productDTO';
import { Item, SalePostDTO } from 'src/app/model/salePostDTO';
import { ClientService } from 'src/app/service/client.service';
import { ProductService } from 'src/app/service/product.service';
import { SaleService } from 'src/app/service/sale.service';

@Component({
  selector: 'app-saleadd',
  templateUrl: './saleadd.component.html',
  styleUrls: ['./saleadd.component.css']
})
export class SaleaddComponent implements OnInit {
  msgError;
  msgSuccess;

  subtotal = 0;
  descuento = 0;
  subtotalConDescuento = 0;
  iVA = 0;
  totalMasIVA = 0;

  productoPrecioTemp = 0
  ProductoSubtotalTemp = 0

  products: Array<ProductDTO>
  clients: Array<ClientDTO>

  salePost: SalePostDTO
  detailForms: Array<Item>

  checkoutForm = this.formBuilder.group({
    "cliente": "",
    "descuento": 0,
  });

  itemForm = this.formBuilder.group({
    "producto": "",
    "cantidad": 0,
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private saleService: SaleService,
    private productService: ProductService,
    private clientService: ClientService,
  ) {
    this.salePost = new SalePostDTO();
    this.detailForms = new Array<Item>();
  }

  ngOnInit(): void {
    this.getProduct()
    this.getClient()
  }

  onSubmit(): void {
    this.salePost.cliente = parseInt(this.checkoutForm.value.cliente);
    this.salePost.descuento = parseInt(this.checkoutForm.value.descuento);
    this.salePost.item = this.detailForms;
    if (this.salePost.descuento > 100) {
      this.msgError = " Error descuento sobrepasa el 100%"
    } else if (!this.salePost.cliente) {
      this.msgError = " Error debe ingresar un cliente"
    } else {
      this.saleService.save_sale(this.salePost).subscribe(
        response => {
          console.log(response);

        }, error => {
          console.log(error);
          if (error["message"]) {
            this.msgError = error["message"];
          } else {
            this.msgError = "Error desconocido"
          }
        }
      )

    }
  }

  addDetail() {

    var temp: Item = new Item();

    temp.cantidad = parseInt(this.itemForm.value.cantidad);
    temp.producto = parseInt(this.itemForm.value.producto);

    if (temp.cantidad <= 0) {
      this.msgError = " Error cantidad debe ser mayor a cero"
    } else if (temp.cantidad > this.getProductById(this.itemForm.value.producto).cantidad) {
      this.msgError = " Error La cantidad excede al stock"
    } else {
      if (!this.itemForm.value.producto) {
        this.msgError = " Error debe ingresar un producto"
      } else {
        this.detailForms.push(temp)
        this.msgError = ""
        this.productoPrecioTemp = 0
        this.ProductoSubtotalTemp = 0
        this.itemForm.reset();
      }
    }
  }

  getPrecioProducto(event) {
    var temp = event.split(" ");
    var producto = this.getProductById(temp[1]);
    this.productoPrecioTemp = producto.precio;
    this.calcularSubtotalProducto()
  }

  calcularSubtotalProducto() {
    this.ProductoSubtotalTemp = this.productoPrecioTemp * parseInt(this.itemForm.value.cantidad)
  }

  getProductById(id) {
    return this.products.find(element => element.id == id);
  }

  getProduct() {
    this.productService.getProduct().subscribe(
      response => {
        if (response['data']) {
          this.products = response['data'];
          this.getProductById(1);
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

  getClient() {
    this.clientService.getClient().subscribe(
      response => {
        if (response['data']) {
          this.clients = response['data'];
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

}
