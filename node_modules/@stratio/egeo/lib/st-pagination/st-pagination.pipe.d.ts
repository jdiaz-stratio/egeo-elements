import { PipeTransform } from '@angular/core';
import { StPaginationService } from './st-pagination.service';
export declare class StPaginationPipe implements PipeTransform {
    private service;
    constructor(service: StPaginationService);
    transform(items: any[], args: any): any;
}
