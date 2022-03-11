import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchServiceService {

  /* -------------------------------------------------------------------------- */
  /*                    AQUI VA LA RUTA QUE TENGAS DE LA API                    */
  /* -------------------------------------------------------------------------- */
  public url: string = "";

  constructor(

    private http: HttpClient,

  ) {

    /* -------------------------------------------------------------------------- */
    /*               AQUI SE DECLARA LA URL DE LA API EN LA VARIABLE              */
    /* -------------------------------------------------------------------------- */
    // this.url = environment.url;

  }

  /* -------------------------------------------------------------------------- */
  /*                 DECLARACION DE FUNCION PARA LLAMADO DE API                 */
  /* -------------------------------------------------------------------------- */
  //trearDatosSwitch(): Observable<any>{

    
    /* -------------------------------------------------------------------------- */
    /*     SE ASIGNAN LOS HEADERS DONDE VENDRAN LOS PARAMETROS QUE PIDA LA API    */
    /* -------------------------------------------------------------------------- */
    //let headers = new HttpHeaders().set('Content-Type', 'application/json').set('X-Requested-With', 'XMLHttpRequest');

    /* -------------------------------------------------------------------------- */
    /*              SE DECLARA EL TIPO DE PETICION Y LA RUTA COMPLETA             */
    /* -------------------------------------------------------------------------- */
    //return this.http.get(this.url + 'RUTA', { headers: headers });

  //}
}
