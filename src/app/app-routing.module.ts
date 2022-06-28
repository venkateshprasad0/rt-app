import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path:'order/:id', component:OrderComponent},
  {path:'employee/:empName', component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
