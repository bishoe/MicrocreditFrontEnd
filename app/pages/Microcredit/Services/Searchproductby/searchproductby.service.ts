import { Injectable } from '@angular/core';
 import {  catchError, debounceTime, tap } from 'rxjs/operators';
 import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { URLPathModule } from '../../Classes/urlpath/urlpath/urlpath.module';

@Injectable({
  providedIn: 'root'
})
export class SearchproductbyService {

  constructor(private httpService: HttpClient) { }
  GetData = [];
getData(_URLPathModule) :Observable<any>{
 
      return this.GetData.length ?

        of(this.GetData) :

        this.httpService.get<any>(_URLPathModule).pipe(tap(data => this.GetData = data))
}
 
  }
 

 
