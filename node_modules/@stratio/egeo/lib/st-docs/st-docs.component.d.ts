import { ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { StDocsService } from './st-docs.service';
import { StHorizontalTab } from '../st-horizontal-tabs/st-horizontal-tabs.model';
export declare class StDocsComponent implements OnInit, OnDestroy {
    private cd;
    private docsService;
    htmlFile?: string;
    tsFile?: string;
    componentFile?: string;
    htmlCode: string;
    demoTsCode: string;
    componentTsCode: string;
    options: StHorizontalTab[];
    active: StHorizontalTab;
    private subscription;
    constructor(cd: ChangeDetectorRef, docsService: StDocsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onChangeOption(event: Event): void;
    private getFile;
    private disableTabOption;
    private filterOption;
}
