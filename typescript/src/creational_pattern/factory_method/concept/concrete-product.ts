import { Product } from "./interface";

export class ConcreteProduct1 implements Product {
    opration(): string {
        return "Result from ConvreteProduct 1";
    }
}

export class ConcreteProduct2 implements Product {
    opration(): string {
        return "Result from ConvreteProduct 2";
    }
}
