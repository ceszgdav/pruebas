import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  switchActivo = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(){

    if(this.switchActivo){

      this.switchActivo = false;

    } else {

      this.switchActivo = true;

    }

  }

}
