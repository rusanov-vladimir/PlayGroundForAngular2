﻿//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v6.11.6129.25106 (NJsonSchema v4.28.6128.27588) (http://NSwag.org)
// </auto-generated>
//----------------------

import 'rxjs/Rx'; 
import {Observable} from 'rxjs/Observable';
import {Injectable, Inject, Optional, OpaqueToken} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';

export const API_BASE_URL = new OpaqueToken('API_BASE_URL');

@Injectable()
export class HeroesClient {
    private http: Http = null; 
    private baseUrl: string = undefined; 

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http; 
        this.baseUrl = baseUrl ? baseUrl : ""; 
    }

    get(): Observable<any> {
        let url_ = this.baseUrl + "/api/Heroes"; 

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGet(response);
        });
    }

    private processGet(response: Response) {
        const data = response.text();
        const status = response.status.toString(); 

        if (status === "200") {
            let result200: any = null; 
            let resultData200 = data === "" ? null : JSON.parse(data);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200; 
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    post(newHero: Hero): Observable<any> {
        let url_ = this.baseUrl + "/api/Heroes"; 

        const content_ = JSON.stringify(newHero ? newHero.toJS() : null);
        
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processPost(response);
        });
    }

    private processPost(response: Response) {
        const data = response.text();
        const status = response.status.toString(); 

        if (status === "200") {
            let result200: any = null; 
            let resultData200 = data === "" ? null : JSON.parse(data);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200; 
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    get2(id: number): Observable<any> {
        let url_ = this.baseUrl + "/api/Heroes/{id}"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGet2(response);
        });
    }

    private processGet2(response: Response) {
        const data = response.text();
        const status = response.status.toString(); 

        if (status === "200") {
            let result200: any = null; 
            let resultData200 = data === "" ? null : JSON.parse(data);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200; 
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    put(id: number, heroToUpdate: Hero): Observable<void> {
        let url_ = this.baseUrl + "/api/Heroes/{id}"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 

        const content_ = JSON.stringify(heroToUpdate ? heroToUpdate.toJS() : null);
        
        return this.http.request(url_, {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processPut(response);
        });
    }

    private processPut(response: Response) {
        const data = response.text();
        const status = response.status.toString(); 

        if (status === "204") {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }

    delete(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/Heroes/{id}"; 

        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processDelete(response);
        });
    }

    private processDelete(response: Response) {
        const data = response.text();
        const status = response.status.toString(); 

        if (status === "204") {
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }
}

@Injectable()
export class HomeClient {
    private http: Http = null; 
    private baseUrl: string = undefined; 

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http; 
        this.baseUrl = baseUrl ? baseUrl : ""; 
    }

    get(): Observable<any> {
        let url_ = this.baseUrl + "/api/Home"; 

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGet(response);
        });
    }

    private processGet(response: Response) {
        const data = response.text();
        const status = response.status.toString(); 

        if (status === "200") {
            let result200: any = null; 
            let resultData200 = data === "" ? null : JSON.parse(data);
            result200 = resultData200 !== undefined ? resultData200 : null;
            return result200; 
        }
        else
        {
            throw "error_no_callback_for_the_received_http_status"; 
        }
    }
}

export class Hero { 
    id: number; 
    name: string;

    constructor(data?: any) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : null;
            this.name = data["name"] !== undefined ? data["name"] : null;
        }
    }

    static fromJS(data: any): Hero {
        return new Hero(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : null;
        data["name"] = this.name !== undefined ? this.name : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        var json = this.toJSON();
        return new Hero(JSON.parse(json));
    }
}