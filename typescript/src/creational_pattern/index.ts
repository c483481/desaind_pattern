import { main as mainConseptFactoryMethod } from "./factory_method/concept/index";
import { main as mainDialogFactoryMethod } from "./factory_method/dialog-rendering/index";

export function runCreationalPattern() {
    console.log("example factory method: ");
    mainConseptFactoryMethod();
    console.log("\n");
    mainDialogFactoryMethod();
}
