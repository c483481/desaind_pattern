import { Product } from "./interface";

export abstract class Creator {
    abstract factoryMethod(): Product;

    someOperationFromCreator(): string {
        const product = this.factoryMethod();
        return product.opration();
    }
}
