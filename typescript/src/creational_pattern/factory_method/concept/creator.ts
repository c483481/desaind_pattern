import { Creator } from "./abstract-class";
import { ConcreteProduct1, ConcreteProduct2 } from "./concrete-product";
import { Product } from "./interface";

export class Creator1 extends Creator {
    private product!: Product;
    factoryMethod(): Product {
        if (!this.product) {
            this.product = new ConcreteProduct1();
        }
        return this.product;
    }
}

export class Creator2 extends Creator {
    private product!: Product;
    factoryMethod(): Product {
        if (!this.product) {
            this.product = new ConcreteProduct2();
        }
        return this.product;
    }
}
