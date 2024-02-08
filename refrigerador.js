'use strict'


class Refrigerador {
    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad || 0;

    }
    moreProdduct(newproducto, nuevacantidad){
        this.producto = newproducto;
        this.cantidad += nuevacantidad;
        alert (`Hay ${this.cantidad} unidades de ${this.producto}`);
    }
    lessProduct(quitarproducto, consumo){
        this.producto = quitarproducto;
        this.cantidad -= consumo;
        alert (`Hay ${this.cantidad} unideades de ${this.producto}`);
    }

}

let refrigerador = new Refrigerador("manzana", 5);
refrigerador.moreProdduct("manzana", 3)
refrigerador.lessProduct("manzana", 3)