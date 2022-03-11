import { Component, OnInit } from '@angular/core';
import switchData from '../../data/swtichData.json';

interface data {
  nombre: string;
  telefonos: object;
}

@Component({
  selector: 'app-switch-data',
  templateUrl: './switch-data.component.html',
  styleUrls: ['./switch-data.component.scss']
})

export class SwitchDataComponent implements OnInit {

  dataUser: Array<data> = [];

  telefonos: any;

  constructor() { }

  ngOnInit(): void {

    this.dataUser = switchData

    this.telefonos = this.dataUser[0].telefonos

    console.log(this.dataUser)
    console.log(this.telefonos)

  }

  switchChange(tel: string) {
    console.log(tel)
    /*AQUI YA SE ENVIARIA LOS DATOS AL BACK PARA QUE SE LE ENVIE EL MENSAJE*/
  }

}
