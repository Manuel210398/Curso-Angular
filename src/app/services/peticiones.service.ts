import {Injectable} from '@angular/core';
//import {Http, Response, Headers} from '@angular/Http';
import 'rxjs/add/operator/map'
import {map} from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
//import {Observable} from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

//import { map } from "rxjs/operators";

@Injectable() export class PeticionesService
{
  public url: string;
  constructor(private _http:HttpClient)
  {
      this.url = "https://jsonplaceholder.typicode.com/posts";
  }
  getPrueba()
  {
    return 'Hola mundo';
  }
  getArticulos()
  {
  //  return this._http.get(this.url)
    //  .pipe(map(res => res.json())) ;



  }
}
