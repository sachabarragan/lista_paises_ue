import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  BASEURL: string;
  constructor(
    private _http: HttpClient
  ) { 
    this.BASEURL = 'https://restcountries.eu/rest/v2/region/europe';
  }

  getPaises(): Promise<any[]>{
    return this._http.get<any[]>(this.BASEURL).toPromise();
  }
}
