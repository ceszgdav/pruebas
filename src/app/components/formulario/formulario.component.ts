import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(

    private formBuilder: FormBuilder,

    private router:Router,

  ){}

  ngOnInit(): void {

  }
  
  form = this.formBuilder.group({

    name: ['', Validators.required]

  })

  saveData(){

    Swal.fire({

      title: 'Guardar?',

      showDenyButton: true,
      
      showCancelButton: false,
      
      confirmButtonText: 'Si',
      
      denyButtonText: `no`,

      reverseButtons: true,
      
    }).then((result) => {
      
      /* Read more about isConfirmed, isDenied below */
      
      if (result.isConfirmed) {
        
        this.router.navigate(['/pagina']);

      } else if (result.isDenied) {
        
        Swal.fire('Cancelado', '', 'info')
        
      }
      
    })
    
  }

}
