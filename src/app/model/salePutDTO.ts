// Generated by https://quicktype.io

export interface SalePutDTO {
    id:        number;
    fecha:     string;
    iva:       number;
    descuento: number;
    total:     number;
    cliente:   Cliente;
    items:     Item[];
}

export interface Cliente {
    id:     number;
    nombre: string;
}

export interface Item {
    id:       number;
    cantidad: number;
    subtotal: number;
    producto: Producto;
}

export interface Producto {
    id:       number;
    nombre:   string;
    precio:   number;
    cantidad: number;
}