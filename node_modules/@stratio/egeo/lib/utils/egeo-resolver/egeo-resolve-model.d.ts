import { Observable } from 'rxjs';
export interface EgeoResolverKeys {
    path: string;
    toResolve: any;
    resolved?: any;
}
export interface TranslateServiceType {
    get(key: string | string[], interpolateParams?: Object): Observable<any>;
}
export interface TranslateableElement {
    key: string;
    translate: boolean;
}
