import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'MfPJyYXAqz9iCZfIZldD3NEAtndCBaHg';
  private _historial: string [] = [ ];

  get historial() {
        return [...this._historial];
  }

  constructor( private http: HttpClient){}

  buscarGifs( query: string = '' ){

    query = query.trim().toLowerCase();
     
    //si no existe lo insertamos
    if( !this._historial.includes(query)){
      this._historial.unshift( query ); //insertar al inicio
      this._historial = this._historial.splice(0,10); //maximo 10
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key='+this.apiKey+'&q=overwatch&limit=10')
      .subscribe( (resp:any) => {
        console.log(resp.data);
        
      });
 
    // console.log(this._historial); 

    

  }

}
