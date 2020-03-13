import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        InputComponent,
        ButtonComponent
    ],
    declarations: [
        InputComponent,
        ButtonComponent
    ],
    providers: [],
})
export class ComponentsModule { }
