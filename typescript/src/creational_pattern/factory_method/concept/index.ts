import { exmapleClientCode } from "./client";
import { Creator1, Creator2 } from "./creator";

/***
 * Factory method is a creational design pattern
 * which solves the problem of
 * creating product objects without specifying their concrete classes.
 ***/

export function main() {
    console.log("App: Launched with the ConcreteCreator1.");
    exmapleClientCode(new Creator1());

    console.log("App: Launched with the ConcreteCreator2.");
    exmapleClientCode(new Creator2());
}
