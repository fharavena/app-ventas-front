import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options = [
    {
      "link": "/",
      "value": "Inicio"
    },
    {
      "link": "/venta",
      "value": "Venta"
    },
    // {
    //   "link": "/cliente",
    //   "value": "Cliente"
    // },
    // {
    //   "link": "/producto",
    //   "value": "Producto"
    // }
  ]

  

  constructor() { }

  ngOnInit(): void {
    
  }

}
