import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'table', component: TableComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard' , pathMatch: 'full' },
  { path: '**', redirectTo: '/table'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
