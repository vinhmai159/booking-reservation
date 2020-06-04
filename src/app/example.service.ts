import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  } from '../../common/get-order.dto';


@Injectable()
export class ExampleService {

    constructor(private http: HttpClient) { }

    getExampleMessage(): Observable<any> {
        return this.http.get<any>('/api/message');
    }
}