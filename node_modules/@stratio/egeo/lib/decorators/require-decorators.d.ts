export declare const enum METADATA_TYPE {
    PROPERTY = 0
}
export interface EgeoMetadata {
    type: METADATA_TYPE;
    required?: boolean;
    requireCondition?: string;
    deprecated?: boolean;
    initialValue?: any;
}
export declare function StRequired(condition?: string): any;
export declare function StDeprecated(initialValue?: any): any;
export declare function StEgeo(params?: ''): any;
