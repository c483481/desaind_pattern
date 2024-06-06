import { Button } from "./interface";

export abstract class Dialog {
    abstract createButton(): Button;

    render() {
        const button = this.createButton();
        button.render();
    }

    refresh() {
        console.log("Dialog Refresh");
    }
}
