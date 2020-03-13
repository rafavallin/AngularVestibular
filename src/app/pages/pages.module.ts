import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from '../components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';


@NgModule({
    imports: [
        BrowserModule,
        ComponentsModule
    ],
    exports: [FormComponent],
    declarations: [FormComponent],
    providers: [],
})
export class PagesModule { }
