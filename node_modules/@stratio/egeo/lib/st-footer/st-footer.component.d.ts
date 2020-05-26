import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StFooterLink } from './st-footer.model';
export declare class StFooterComponent {
    private router;
    rightsText: string;
    links: StFooterLink[];
    qaTag: string;
    image: string;
    link: EventEmitter<StFooterLink>;
    constructor(router: Router);
    goToLink(link: StFooterLink): void;
}
