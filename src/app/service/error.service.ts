import { Injectable, Inject } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Error } from '../model/error.model';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {

    errors$: Observable<Error[]>;
    private errors = new BehaviorSubject<Error[]>( [] );
    private timer: any;

    constructor() {
        this.errors$ = this.errors.asObservable();
    }

    addError( error ) {
        const list = this.getErrors();
        list.push( error );
        this.errors.next( list );

        this.autoCleanErrors();
    }

    cleanErrors() {
        this.errors.next( [] );
    }

    getErrors() {
        return this.errors.getValue();
    }

    private autoCleanErrors() {
        if ( this.timer ) {
            clearTimeout( this.timer );
        }
        this.timer = setTimeout(() => {
            this.cleanErrors();
        }, 5000 );
    }

}
