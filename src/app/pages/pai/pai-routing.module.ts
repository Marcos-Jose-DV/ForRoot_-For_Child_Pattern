import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiComponent } from './pai.component';
import { Filho1Component } from '../filho1/filho1.component';
import { Filho2Component } from '../filho2/filho2.component';
import { Filho3Component } from '../filho3/filho3.component';

const routes: Routes = [
  {
    path: '',
    component: PaiComponent,
    children: [
      { path: '', redirectTo: 'filho1', pathMatch: 'full' },
      { path: 'filho1', component: Filho1Component },
      { path: 'filho2', component: Filho2Component },
      { path: 'filho3', component: Filho3Component }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaiRoutingModule {}