import { PipeTransform } from '@angular/core';
export declare class StObjectToArrayPipe implements PipeTransform {
    transform(obj: any): {
        key: string;
        value: any;
    }[];
}
