import {Component} from '@angular/core';
import {Empleado} from './empleado';
@Component
({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html'
})
export class EmpleadoComponent
{
  public titulo ='Componente Empleados';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;
  constructor()
  {
      this.empleado = new Empleado ('Manuel Lozano',20,'Tapicero',true);
      this.trabajadores = [
        new Empleado ('Manolo Matinez',35,'Administrativo',false),
        new Empleado ('Manuel Lozano',20,'Cajero',false),
        new Empleado ('Ana Robles',20,'Tapicero',true)
      ];
      this.trabajador_externo = true;
      this.color = 'blue';
      this.color_seleccionado='#ccc';
  }
  ngOnInit()
  {
    console.log(this.empleado);
    console.log (this.trabajadores);
  }
  cambiarExterno (valor)
  {
    this.trabajador_externo = valor;
  }
}
