import {Component} from '@angular/core';
@Component
({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent
{
  public nombre_componente ='Componente de Fruta';
  public listado_fru = 'Naranja, Manzana, Pera y Sandia';
  public nombre:string;
  public edad:number;
  public mayorDeEdad:boolean;
  public trabajo:Array<any> =['44','Tapicero'];
  comodin:any ;

  constructor ()
  {
    this.nombre='Manuel Lozano ';
    this.edad=17;
    this.mayorDeEdad=false;
    this.comodin='si'
  }
  ngOnInit()
  {
    this.CambiarNombre();
    this.CambiarEdad(44);
    alert(this.nombre+ " "+this.edad);
    var uno = 8;
    var dos = 26;
    if (uno==8)
    {
      let uno=3;
      var dos= 88;
      console.log ("SIMON"+ uno+" "+dos);
    }
    console.log ("Afuera"+ uno);
  }
  CambiarNombre()
  {
    this.nombre = 'Robedto Mena';
  }
  CambiarEdad(edad)
  {
    this.edad=edad;
  }
}
