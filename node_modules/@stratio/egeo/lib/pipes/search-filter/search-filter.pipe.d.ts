import { PipeTransform } from '@angular/core';
export declare class StFilterList implements PipeTransform {
    transform(list: any[], field: string, search: string): any[];
    private contains;
    private isDefined;
    private isString;
    private checkParams;
}
