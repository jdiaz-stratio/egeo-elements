import { OnInit } from '@angular/core';
export declare class StInfoBoxComponent implements OnInit {
    icon: string;
    title: string;
    width: number;
    height: number;
    styleValue: Object;
    constructor();
    ngOnInit(): void;
    getStyles(): Object;
}
