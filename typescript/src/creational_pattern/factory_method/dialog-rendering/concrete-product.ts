import { Button } from "./interface";

export class HtmlButton implements Button {
    render(): void {
        console.log("<button>Test Button</button>");
        this.onClick();
    }

    onClick(): void {
        console.log("Click Button says - 'Hello World!'");
    }
}

export class WindowsButton implements Button {
    render(): void {
        console.log("Drawing a Windows Button");
        this.onClick();
    }
    onClick(): void {
        console.log("Click!, Hello, Windows!");
    }
}
