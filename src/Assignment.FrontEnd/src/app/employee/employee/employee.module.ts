import { NgModule } from '@angular/core';
import { employeeExport, empProviders } from './config/employee_module_config';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [employeeExport],
  exports: [],
  providers: [empProviders]
})
export class EmployeeModule {}
