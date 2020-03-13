import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        InputComponent,
        ButtonComponent,
        CardComponent
    ],
    declarations: [
        InputComponent,
        ButtonComponent,
        CardComponent
    ],
    providers: [],
})
export class ComponentsModule { }
