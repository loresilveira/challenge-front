import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UserService{
    constructor(private _http: HttpClient){}

    url: string = 'https://randomuser.me/api/'

    public getUser(): Observable<any>{
        return this._http.get<any>(this.url);
    }

    public getListUser(): Observable<any[]>{
        return this._http.get<any>(`${this.url}?results=5`);
    }
}