import {Injectable} from '@angular/core';
//import {Http, Response, Headers} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable() export class PeticionesService
{
  getPrueba()
  {
    return 'Hola mundo';
  }
}
