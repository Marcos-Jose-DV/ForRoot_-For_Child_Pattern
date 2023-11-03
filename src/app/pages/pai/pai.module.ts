import { NgModule } from "@angular/core";
import { Filho1Component } from "../filho1/filho1.component";
import { Filho2Component } from "../filho2/filho2.component";
import { Filho3Component } from "../filho3/filho3.component";
import { PaiRoutingModule } from "./pai-routing.module";
import { PaiComponent } from './pai.component';




@NgModule({
    declarations: [
        PaiComponent,
        Filho1Component,
        Filho2Component,
        Filho3Component
    ],
    imports: [
        PaiRoutingModule
    ],
    exports: []
})

export class PaiModule { }