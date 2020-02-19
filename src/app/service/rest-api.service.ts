import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpResourceService } from './http-resource.service';
import { ErrorService } from './error.service';
import { HttpUrlConfig } from '../config/http-url-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class RestApiService extends HttpResourceService {
    constructor(http: HttpClient,
                errorService: ErrorService,
                httpUrlConfig: HttpUrlConfig) {
        super (http, errorService, httpUrlConfig);
    }

 getListofFoodItems(searchText: string) {
     return this.sendGet(this.httpUrlConfig.searchByApiKey + `${searchText}`);
 }

 getDetailedFoodInfo(foodId: number) { 
    return this.sendGet(`${foodId}` + this.httpUrlConfig.searchApi);
}
}

