import { Observable } from 'rxjs';
import { EgeoResolverKeys, TranslateServiceType } from './egeo-resolve-model';
export declare class EgeoResolveService {
    getKeys(object: any, key: string, searchedValue?: any): EgeoResolverKeys[];
    setKeys(object: any, resolved: EgeoResolverKeys[]): void;
    translate(object: any, translateService: TranslateServiceType): Observable<any>;
    translateArrayOfKeys(keys: string[], translateService: TranslateServiceType): Observable<string[]>;
    private remapArrayWithTranslations;
    private remapObjectWithTranslations;
    private getTranslationFromTranslatedKey;
    private extractTranslationKeys;
    private searchInDeep;
    private getPath;
    private isArray;
}
