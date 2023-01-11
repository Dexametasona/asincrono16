import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChileComponent } from './chile/chile.component';
import { PeruComponent } from './peru/peru.component';
import { UruguayComponent } from './uruguay/uruguay.component';



@NgModule({
  declarations: [
    ChileComponent,
    PeruComponent,
    UruguayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChileComponent,
    PeruComponent,
    UruguayComponent
  ]
})
export class Asinc16Module { }
