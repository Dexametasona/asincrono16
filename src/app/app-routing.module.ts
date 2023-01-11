import { UruguayComponent } from './asinc16/uruguay/uruguay.component';
import { ChileComponent } from './asinc16/chile/chile.component';
import { PeruComponent } from './asinc16/peru/peru.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'peru', component:PeruComponent},
  {path:'chile', component:ChileComponent},
  {path:'uruguay', component:UruguayComponent},
  {path:'', redirectTo:'/peru', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
