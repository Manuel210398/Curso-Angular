import {Pipe, PipeTransform} from "@angular/core";
@Pipe ({name:'conversor'})
export class ConversorPipes implements PipeTransform{
  transform (value, por )
  {
    let value_one = parseInt (value);
    let value_two = parseInt (por);
    let result = "La multiplicacion :"+value_one+"*"+value_two+"="+(value_one*value_two);
    return result;
  }
}
