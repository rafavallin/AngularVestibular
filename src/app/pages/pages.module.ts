import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from '../components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [BrowserModule],
    exports: [FormComponent],
    declarations: [FormComponent,
        ButtonComponent],
    providers: [],
})
export class PagesModule { }
