import { NgModule } from '@angular/core';
import { employeeExport, empProviders } from './config/employee_module_config';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent],
  imports: [employeeExport],
  exports: [],
  providers: [empProviders]
})
export class EmployeeModule {}
