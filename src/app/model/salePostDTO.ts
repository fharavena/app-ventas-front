export interface SalePostDTO {
    descuento: number;
    cliente:   number;
    item:      Item[];
}

export interface Item {
    cantidad: number;
    producto: number;
}
