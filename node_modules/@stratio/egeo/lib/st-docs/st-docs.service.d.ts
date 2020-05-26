import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export declare class StDocsService {
    private http;
    constructor(http: HttpClient);
    getFile(route?: string): Observable<string>;
}
