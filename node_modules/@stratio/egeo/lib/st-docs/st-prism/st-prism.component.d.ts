import { AfterViewChecked } from '@angular/core';
import 'prismjs';
import 'prismjs/components/prism-typescript';
export declare class StPrismComponent implements AfterViewChecked {
    language: string;
    private async;
    private callback?;
    ngAfterViewChecked(): void;
    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the
     * language definitions to use, and returns a string with the HTML produced.
     */
    highlightElement(element: any, async: boolean, callback?: (element: Element) => void | undefined): void;
    /**
     * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx
     * class and then calls Prism.highlightElement() on each one of them.
     */
    highlightAll(async: boolean, callback?: (element: Element) => void | undefined): void;
}
