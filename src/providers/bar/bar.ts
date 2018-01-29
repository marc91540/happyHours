import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BarProvider {
  backendUrl = 'http://localhost:4211/bar';

  constructor(public _httpClient: HttpClient) {
    console.log('Hello BarProvider Provider');
  }



  getBars(){
    return this._httpClient.get<any>(`${this.backendUrl}`);
    //console.log(formData);
    }

}
