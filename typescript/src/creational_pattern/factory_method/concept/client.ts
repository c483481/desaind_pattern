import { Creator } from "./abstract-class";

export function exmapleClientCode(creator: Creator) {
    console.log("this is client who doesnt know the creator class");
    console.log(creator.someOperationFromCreator());
}
