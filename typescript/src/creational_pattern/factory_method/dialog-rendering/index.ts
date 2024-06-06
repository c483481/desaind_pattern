import { HtmlDialog, WindowsDialog } from "./cerator";
import { exmapleClientCode } from "./client";

export function main() {
    console.log("Creating Windows GUI");
    exmapleClientCode(new WindowsDialog());

    console.log("Creating the HTML GUI");
    exmapleClientCode(new HtmlDialog());
}
