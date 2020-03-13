import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.scss']
})
export class FormComponent implements OnInit {
    message = 'Quero me inscrever!';
    textBtnConfig = {
        styles: {
          position: 'relative',
          width: '150px',
          height: '60px',
          backgroundColor: '#000000',
          color: '#fff',
          fontFamily: 'sans-serif',
          fontSize: '20px',
          borderRadius: '10px',
          marginTop: '30px'
        },
        text: 'Registrar'
      }; 
      onClickEventReceived(event: string) {
        this.message = event;
    }
    
    constructor() { }

    ngOnInit() { }

}