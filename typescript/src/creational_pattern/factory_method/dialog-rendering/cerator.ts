import { Dialog } from "./abstract-class";
import { HtmlButton, WindowsButton } from "./concrete-product";
import { Button } from "./interface";

export class HtmlDialog extends Dialog {
    createButton(): Button {
        return new HtmlButton();
    }
}

export class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}
