import {Injectable} from '@angular/core';

@Injectable()
export class RopaService
{
  public nombre_prenda= 'Pantalones';
  public coleccion_ropa = ['Pantalo','Camisa'];
    prueba(nombre_prenda)
    {
      return nombre_prenda;
    }
    addRopa(nombre_prenda: string):Array<string>
    {
      this.coleccion_ropa.push(nombre_prenda);
      return this.getRopa();
    }
    getRopa()
    {
      return this.coleccion_ropa;
    }
    deleteRopa(index:number)
    {
      this.coleccion_ropa.splice(index,1);
      return this.getRopa();
    }
}
