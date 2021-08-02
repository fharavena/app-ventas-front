export class SalePostDTO {
    descuento: number;
    cliente: number;
    item: Array<Item>;
}

export class Item {
    cantidad: number;
    producto: number;
}
