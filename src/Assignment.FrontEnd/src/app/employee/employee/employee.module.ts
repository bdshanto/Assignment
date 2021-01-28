import { NgModule } from '@angular/core';
import { commonImports } from '../../app-config/appModuleConfig';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { employeeExports, empProviders } from './config/employee_module_config';

@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent],
  imports: [commonImports],
  exports: [employeeExports],
  providers: [empProviders]
})
export class EmployeeModule {}
