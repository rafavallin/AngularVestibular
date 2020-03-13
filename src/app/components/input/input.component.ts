import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss']
})

export class InputComponent implements OnInit {
    
    @Input() label: string;
    @Input() value: string = '';
    @Input() expectedvalue: string = '';
    @Input() type: string = 'text'
    public formclass: string = '';  
    public formmessage: string = '';

    private readonly invalid = 'invalid'
    private readonly valid = ''
    
    constructor() { }

    validations() {
        this.formmessage = '';
        this.formclass = this.valid;
        if(this.value == ''){
            this.formclass = this.invalid;
            this.formmessage = 'Este campo é obrigatório.'
        } 
    }

    ngOnInit() { 
       
    }
}