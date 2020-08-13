import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GeneratorComponent} from "./generator/generator.component";
import {PaymentsComponent} from "./payments/payments.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'generator', component: GeneratorComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
