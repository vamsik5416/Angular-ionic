import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const apiKey = 'SLcf1Grpgh57kb8xZkTYXqS6QSqY52dmYUWLJsJA'; // API Key

@Injectable({
    providedIn: 'root',
})
export class HttpUrlConfig { 

    env = environment;
    serviceBase = this.env.authUrl + '/fdc/v1';
    search = 'search';
    searchApi = '?api_key=' + apiKey;
    searchByApiKey = this.search + this.searchApi + '&generalSearchInput=';

    searchFoodById = 'detail/:id';
}