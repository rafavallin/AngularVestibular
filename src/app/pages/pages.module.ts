import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from '../components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        BrowserModule,
        ComponentsModule,
        HttpClientModule
    ],
    exports: [FormComponent],
    declarations: [FormComponent],
    providers: [HttpClient],
})
export class PagesModule { }
