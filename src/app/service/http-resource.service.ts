
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map, finalize} from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpUrlConfig } from '../config/http-url-config';
import { Error } from '../model/error.model';
import { ErrorService } from './error.service';


export class HttpResourceService {

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        public httpUrlConfig: HttpUrlConfig,

    ) { }

    sendGet( path: string ): Observable<any> {
        return this.http
            .get( `${this.httpUrlConfig.serviceBase}/${path}`, this.getOptions() ).pipe(
            map( response => this.handleResponse(response, this) ),
            catchError( error => this.handleError( error, this ) ),);
    }

    sendPost( path: string, data?: any ): Observable<any> {
        return this.http
            .post( `${this.httpUrlConfig.serviceBase}/${path}`, data, this.getOptions() ).pipe(
            map( response => this.handleResponse(response, this) ),
            catchError( error => this.handleError( error, this ) ),);
    }

    handleResponse( response: any, service: HttpResourceService ): any {
        return service.wrapResponse( response );
    }
    
    handleError( responseError, service: HttpResourceService ): Observable<any> {

        console.error( '[http-resource.service] error', responseError );

        const errorException = service.wrapResponse( responseError );

        const code = errorException.status || responseError.status;
        const message = errorException.error || responseError.statusText;
        const reason = errorException.message || errorException;
        const newError = new Error( code, message, reason );

        if ( code + '' === '401' || code + '' === '302' ) {
            console.log( 'http resource not authorized, redirection to /login' );
            window.location.href = '/login';
        }

        this.errorService.addError( newError );

        return observableThrowError( responseError );
    }

    getOptions( data?: any ) {
        
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = {
            headers: headers
         }

        return options;
    }

    wrapResponse(response) {
        if (response && response._body) {
            if (response.arrayBuffer().byteLength > 0) {
                try {
                    JSON.parse(response._body);
                    return response.json();
                } catch (e) {
                    return response.text();
                }
            } else {
                return {};
            }
        }
        return response;
    }

}
