import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StLauncherGroup, StLauncherItem } from '../st-launcher.model';
export declare class StLauncherItemComponent implements OnInit, OnChanges {
    item: StLauncherGroup;
    qaTag: string;
    limit: number;
    limitLabel: string;
    toggle: EventEmitter<StLauncherGroup>;
    select: EventEmitter<StLauncherItem>;
    view: EventEmitter<StLauncherGroup>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    readonly itemsFiltered: StLauncherItem[];
}
