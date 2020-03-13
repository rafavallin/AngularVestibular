import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InputModel } from 'src/app/models/input.model';

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

    public inputs: InputModel[] = [];
    
    constructor(private httpclient: HttpClient) { 
      httpclient.get<InputModel[]>('assets/data/forms.json').subscribe(x=> this.inputs = x);
    }

    ngOnInit() { }

}